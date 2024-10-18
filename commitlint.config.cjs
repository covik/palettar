const path = require('path');
const fs = require('fs');

const packagesPath = path.resolve(__dirname, './packages');
const packageScopes = fs.readdirSync(packagesPath).filter((file) => {
  return fs.statSync(path.join(packagesPath, file)).isDirectory();
});

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [...packageScopes, 'deps'],
    ],
  },
};
