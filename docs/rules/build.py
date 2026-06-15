import subprocess, json, os, sys, textwrap, shutil

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, '../../src/lib/ruleEnrichments.js')
OUT_JSON = os.path.join(BASE, 'rules.json')
OUT_HTML = os.path.join(BASE, 'explorer.html')

# Prefer Node if available, otherwise fall back to Python regex parse
def run_node():
    node = shutil.which('node')
    if not node:
        return False
    js = os.path.join(BASE, 'generate-data.js')
    result = subprocess.run([node, js], capture_output=True, text=True, cwd=os.path.dirname(BASE))
    print(result.stdout.strip())
    if result.returncode != 0:
        print('Node stderr:', result.stderr)
    return result.returncode == 0

def run_python():
    import re
    with open(SRC, 'r', encoding='utf-8') as f:
        raw = f.read()
    # find start of object literal
    m = re.search(r'export\s+const\s+RULE_ENRICHMENTS\s*=\s*(\{)', raw)
    if not m:
        raise ValueError("RULE_ENRICHMENTS start not found")
    start = m.start(1)
    brace = 0
    i = start
    while i < len(raw):
        ch = raw[i]
        if ch == '{':
            brace += 1
        elif ch == '}':
            brace -= 1
            if brace == 0:
                break
        elif ch == '"':
            i += 1
            while i < len(raw):
                if raw[i] == '\\':
                    i += 2
                elif raw[i] == '"':
                    i += 1
                    break
                else:
                    i += 1
            continue
        i += 1
    obj_text = raw[start:i+1]
    # strip comments and trailing commas
    obj_text = re.sub(r'/\*.*?\*/', '', obj_text, flags=re.DOTALL)
    obj_text = re.sub(r'//[^\n]*', '', obj_text)
    obj_text = re.sub(r',\s*\]', ']', obj_text)
    obj_text = re.sub(r',\s*\}', '}', obj_text)
    # convert unquoted keys to quoted
    obj_text = re.sub(r'([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', lambda m: m.group(1) + '"' + m.group(2) + '":', obj_text)
    # convert single quotes to double where safe (simple heuristic)
    # replace '...' strings not inside already-double-quoted strings
    # naive: turn any remaining single-quoted string literals
    def fix_quotes(t):
        out = []
        i = 0
        while i < len(t):
            if t[i] == '"':
                out.append(t[i])
                i += 1
                while i < len(t):
                    out.append(t[i])
                    if t[i] == '\\':
                        i += 1
                        out.append(t[i])
                    elif t[i] == '"':
                        i += 1
                        break
                    i += 1
            elif t[i] == "'":
                out.append('"')
                i += 1
                while i < len(t):
                    if t[i] == '\\':
                        out.append(t[i])
                        i += 1
                        out.append(t[i])
                    elif t[i] == "'":
                        out.append('"')
                        i += 1
                        break
                    else:
                        out.append(t[i])
                    i += 1
            else:
                out.append(t[i])
                i += 1
        return ''.join(out)
    obj_text = fix_quotes(obj_text)
    data = json.loads(obj_text)
    rules = [{"id": k, **v} for k, v in data.items()]
    with open(OUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(rules, f, indent=2)
    print(f"Wrote {len(rules)} rules to {OUT_JSON}")
    return rules

def inline_html(rules):
    if not os.path.exists(OUT_HTML):
        print(f"{OUT_HTML} not found; skipping inline.")
        return
    with open(OUT_HTML, 'r', encoding='utf-8') as f:
        html = f.read()
    tag_open = '<script type="application/json" id="rules-data">'
    tag_close = '</script>'
    start = html.find(tag_open)
    if start == -1:
        print(f"rules-data script not found in {OUT_HTML}")
        return
    end = html.find(tag_close, start + len(tag_open))
    if end == -1:
        print(f"Closing </script> not found after rules-data")
        return
    payload = json.dumps(rules, indent=2).replace('</script>', '<\\/script>')
    html = html[:start + len(tag_open)] + '\n' + payload + '\n' + html[end:]
    with open(OUT_HTML, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Inlined {len(rules)} rules into {OUT_HTML}")

if __name__ == '__main__':
    rules = None
    if not run_node():
        print("Node not available, falling back to Python parser...")
        rules = run_python()
    # If Node succeeded, load the produced JSON for inlining
    if rules is None:
        with open(OUT_JSON, 'r', encoding='utf-8') as f:
            rules = json.load(f)
    inline_html(rules)
