Alfa Bank UI presets
====================

Набор конфигурационных файлов для компиляции и валидации проектов, основаных на arui-feather.

Установка
---------
```
npm install arui-presets --save-dev
```

Или, если вы используете yarn
```
yarn add arui-presets --dev
```



Использование линтеров
----------------------

При установке пакета в папку вашего проекта автоматически скопируются файлы:

- `stylelint.config.js` - Конфигурация для линтера css фалов
- `.eslintrc` - Конфигурация для линтера js файлов
- `.editorconfig` - Конфигурация для многих редакторов (размер табуляции, стиль переносов и т.п.)

В зависимостях этого проекта уже имеются stylelint и eslint с нужными наборами плагинов, поэтому
для использования валидации достаточно добавить в "scripts" вашего package.json
```
"lint-css": "stylelint ./src/**/*.css",
"lint-js": "eslint ./src/ --ext .js,.jsx",
"lint": "npm run lint-css && npm run lint-js",
```

Конфигурация компиляторов
-------------------------

Так же при установке будут автоматически скопированы следующие файлы

- `.babelrc` - Конфигурация babel
- `postcss.config.js` - Конфигурация postcss
- `mq.json` - Конфигурация для плагина postcss-custom-media

В случае, если в корне проекта уже присутствуют эти файлы - они будут оставлены без изменения.
Если вы хотите чтобы эти файлы автоматически обновлялись при установке - добавьте такой скрипт в ваш `package.json`

```
"install-presets": "install-presets -c .babelrc -c postcss.config.js -c mq.json --force",
"post-install": "npm run install-presets",
```

Использование настроек webpack
------------------------------

В пакете так же содержится файлы с конфигурацией webpack.

- `webpack.base.js` - общий шаблон для webpack
- `webpack.development.js` - настройки для разработческой среды
- `webpack.production.js` - настройки для боевой среды
- `webpack.typescript.js` - настройки для использования typescript в проекте

Лучший способ использовать их - объеденять их пакетом [webpack-merge](https://github.com/survivejs/webpack-merge)

```js
const ARUI_TEMPLATE = require('arui-presets/webpack.base');
const ARUI_DEV_TEMPLATE = require('arui-presets/webpack.development');
const ARUI_PROD_TEMPLATE = require('arui-presets/webpack.production');
const merge = require('webpack-merge');

module.exports = merge.smart(
    { entry: 'src/index.js },
    ARUI_TEMPLATE,
    process.env.NODE_ENV === 'production' ? ARUI_PROD_TEMPLATE : ARUI_DEV_TEMPLATE
);
```
