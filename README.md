Alfa Laboratory UI Presets
==========================

[![npm][npm-img]][npm]
[![license][license-img]][license]
[![travis][travis-img]][travis]
[![appveyor][appveyor-img]][appveyor]
[![greenkeeper][greenkeeper-img]][greenkeeper]

[appveyor]:        https://ci.appveyor.com/project/teryaew/arui-presets
[appveyor-img]:    https://img.shields.io/appveyor/ci/teryaew/arui-presets/master.svg?label=win
[greenkeeper]:     https://greenkeeper.io
[greenkeeper-img]: https://badges.greenkeeper.io/alfa-laboratory/arui-presets.svg
[license]:         https://opensource.org/licenses/MIT
[license-img]:     https://img.shields.io/badge/License-MIT-brightgreen.svg
[npm-img]:         https://img.shields.io/npm/v/arui-presets.svg
[npm]:             https://www.npmjs.org/package/arui-presets
[travis]:          https://travis-ci.org/alfa-laboratory/arui-presets?branch=master
[travis-img]:      https://img.shields.io/travis/alfa-laboratory/arui-presets/master.svg?label=unix

<br />

Набор конфигурационных файлов для компиляции и валидации проектов, основанных на [arui-feather](https://github.com/alfa-laboratory/arui-feather).

Установка
---------
```
npm install arui-presets --save-dev
```

Или, если вы используете yarn:
```
yarn add arui-presets --dev
```

Использование линтеров
----------------------

#### eslint
Вы можете унаследовать конфигурацию вашего eslint от `arui-presets/eslint`.


Файл `.eslintrc.js` вашего проекта:
```js
module.exports = {
    extends: require.resolve('arui-presets/eslint')
};
```

#### stylelint
Вы можете унаследовать конфигурацию вашего stylelint от `arui-presets/stylelint`.


Файл `stylelint.config.js` вашего проекта:
```js
module.exports = {
    extends: 'arui-presets/stylelint'
};
```

В зависимостях этого проекта уже имеются stylelint и eslint с нужными наборами плагинов, поэтому
для использования валидации достаточно добавить в "scripts" вашего package.json
```
"lint-css": "stylelint ./src/**/*.css",
"lint-js": "eslint ./src/ --ext .js,.jsx",
"lint": "npm run lint-css && npm run lint-js",
```

Конфигурация компиляторов
-------------------------

#### babel
Вы можете использовать preset `arui-presets/babel`.


Файл `.babelrc` вашего проекта:
```json
{
  "presets": ["arui-presets/babel"]
}
```

#### postcss
Конфигурация для postcss требует настроек плагина postcss-custom-media. Взять их можно в `arui-feather/mq`.

Файл postcss.config.js вашего проекта:
```js
const mq = require('arui-feather/mq/mq.json');
const aruiConfig = require('arui-presets/postcss');
module.exports = aruiConfig(mq);
```

Использование настроек webpack
------------------------------

В пакете также содержатся файлы с конфигурацией webpack.

- `webpack.base.js` - общий шаблон для webpack
- `webpack.development.js` - настройки для разработческой среды
- `webpack.production.js` - настройки для боевой среды
- `webpack.typescript.js` - настройки для использования typescript в проекте

Лучший способ использовать их — объединять их пакетом [webpack-merge](https://github.com/survivejs/webpack-merge)

```js
const ARUI_TEMPLATE = require('arui-presets/webpack.base');
const ARUI_DEV_TEMPLATE = require('arui-presets/webpack.development');
const ARUI_PROD_TEMPLATE = require('arui-presets/webpack.production');
const merge = require('webpack-merge');

module.exports = merge.smart(
    { entry: 'src/index.js' },
    ARUI_TEMPLATE,
    process.env.NODE_ENV === 'production' ? ARUI_PROD_TEMPLATE : ARUI_DEV_TEMPLATE
);
```

Использование в typescript проектах
-----------------------------------

#### Конфигурация tslint
Вы можете унаследовать конфигурацию вашего tslint от `arui-presets/tslint`.
```json
{
    "extends": "arui-presets/tslint"
}
```

Использование в package.json вашего проекта
```
"lint-ts": "tslint -c tslint.json --project ./tsconfig.json --type-check src/**/*.ts"
```

Лицензия
--------

```
The MIT License (MIT)

Copyright (c) 2017 Alfa Laboratory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
