const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
module.exports = defineConfig({ root: __dirname, plugins: [react()], server: { port: 5173 } });