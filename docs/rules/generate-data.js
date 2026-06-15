import { RULE_ENRICHMENTS } from '../../src/lib/ruleEnrichments.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, 'rules.json');
const htmlPath = path.join(__dirname, 'explorer.html');

const data = Object.entries(RULE_ENRICHMENTS).map(([id, rule]) => ({
  id,
  ...rule
}));

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Wrote ${data.length} rules to ${outputPath}`);

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf-8');
  const tagOpen = '<script type="application/json" id="rules-data">';
  const tagClose = '</script>';
  const startIdx = html.indexOf(tagOpen);
  if (startIdx !== -1) {
    const endIdx = html.indexOf(tagClose, startIdx + tagOpen.length);
    if (endIdx !== -1) {
      const json = JSON.stringify(data, null, 2).replace(/<\/script>/gi, '<\\/script>');
      html = html.slice(0, startIdx + tagOpen.length) + '\n' + json + '\n' + html.slice(endIdx);
      fs.writeFileSync(htmlPath, html, 'utf-8');
      console.log(`Inlined ${data.length} rules into ${htmlPath}`);
    } else {
      console.log(`Closing ${tagClose} not found after rules-data script; skipping inline.`);
    }
  } else {
    console.log(`rules-data script tag not found in ${htmlPath}; skipping inline.`);
  }
}
