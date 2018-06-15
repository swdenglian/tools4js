const shell = require('shelljs');

shell.exec(`
  npm run test && 
  npm run build && 
  cp package.json ./dist/package.json && 
  cd ./dist && npm publish
`);
