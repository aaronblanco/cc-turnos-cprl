const fs = require('node:fs');
const path = require('node:path');
function createStore(file, initialValue) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(initialValue, null, 2));
  return { read() { return JSON.parse(fs.readFileSync(file, 'utf8')); }, write(value) { fs.writeFileSync(file, JSON.stringify(value, null, 2)); return value; }, reset() { return this.write(initialValue); } };
}
module.exports = { createStore };