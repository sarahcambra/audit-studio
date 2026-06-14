import { JSDOM } from 'jsdom';
import axe from 'axe-core';
const html = `<!doctype html><html><head><title></title></head><body>
<img src="x.png">
<a href="#"></a>
<input type="text">
<h3>Skipped heading</h3>
<button></button>
</body></html>`;
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
const { window } = dom;
global.window = window; global.document = window.document;
const src = (await import('fs')).readFileSync('./node_modules/axe-core/axe.min.js','utf8');
window.eval(src);
const results = await window.axe.run(window.document, { resultTypes:['violations'] });
console.log('VIOLATIONS:', results.violations.map(v=>v.id).join(', '));
console.log('count:', results.violations.length);
