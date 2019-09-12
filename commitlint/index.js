const path = require('path');


module.exports = {
    extends: [path.relative(__dirname, require.resolve('arui-presets-lint/commitlint'))]
};
