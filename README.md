# UI-moleculas

В этом проекте собраны UI-компоненты, привязанные к контексту интернет-магазина.

## Использование

### Установка

Для подключения к проекту используйте

```sh
# с помощью npm
npm i -S @sima-land/moleculas

# или с помощью yarn
yarn add @sima-land/moleculas
```

### Настройка среды

Компоненты библиотеки используют:

- импорты css/scss-файлов как css-модулей (каждый такой файл промаркирован в виде `*.module.scss`)
- импорты svg-файлов как react-компонентов

Поэтому, для использования библиотеки необходимо сконфигурировать среду (сборщик или тестовый фреймворк) таким образом чтобы данные импорты работали корректно.
