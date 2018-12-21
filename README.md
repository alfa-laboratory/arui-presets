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

#### commitlint
Вы можете унаследовать конфигурацию вашего commitlint от `arui-presets/commitlint`.


Файл `commitlint.config.js` вашего проекта:
```js
module.exports = {
    extends: ['./node_modules/arui-presets/commitlint']
};
```


#### eslint
Вы можете унаследовать конфигурацию вашего eslint от `arui-presets/eslint`.
К сожалению, разработчики eslint [очень нехотят](https://github.com/eslint/eslint/issues/3458) делать полноценную систему для общих конфигураций, так что вам 
необходимо так же установить `peerDependencies`.

```
npm install eslint eslint-config-airbnb eslint-plugin-class-methods-use-this-regexp \
  eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react \
  eslint-plugin-sort-class-members eslint-plugin-chai-friendly --save-dev
```


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

Настройки основаны на [babel-presets-env](https://babeljs.io/docs/plugins/preset-env/) с добавлением плагинов для 
поддержки декораторов и нескольких оптимизаций для react.

Вы можете передать любые настройки, поддерживаемые `babel-presets-env`.
Если вы хотите получить более адекватную для последних версий node версии компиляцию
(например не компилировать `async/await`) вам необходимо определить env переменную `BABEL_TARGET=node`.
Без этой env переменной сборка будет происходить в расчете на [поддерживаемые arui-feather](https://github.com/alfa-laboratory/arui-feather#%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D1%8B)
версии браузеров.  


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
Для использования в проекте ts используйте пакет [arui-presets-ts](https://github.com/alfa-laboratory/arui-presets-ts).

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
