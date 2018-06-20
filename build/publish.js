const shell = require('shelljs');

shell.exec(`
  npm run test && 
  npm run build && 
  cp package.json ./dist/package.json && 
  cp README.md ./dist/README.md && 
  cp icon.png ./dist/icon.png && 
  cd ./dist && npm publish
`);
