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
