# Библиотека компонентов www.sima-land.ru

React-компоненты, привязанные к контексту интернет-магазина.

## Начало работы

### Установка

Для подключения к проекту используйте

```bash
# npm
$ npm i -S @sima-land/moleculas

# или yarn
$ yarn add @sima-land/moleculas
```

### Настройка среды

Компоненты библиотеки используют:

- импорты изображений (jpg, png..) как URL/base64
- импорты css/scss-файлов как css-модулей (каждый такой файл промаркирован в виде `*.module.scss`)
- импорты svg-файлов как react-компонентов

Поэтому, для использования библиотеки необходимо сконфигурировать среду (сборщик или тестовый фреймворк) таким образом чтобы данные импорты работали корректно.

## Разработка

### Консольные команды, необходимые в процессе разработки

- `npm run test` - запуск unit-тестов
- `npm run lint` - запуск линтеров
- `npm run storybook` - запуск _storybook_

### Общие соглашения

1. Сообщения коммитов должны быть оформлены по следующему шаблону:

   ```
   [№ задачи]

   - [Изменение №1]
   - [Изменение №2]
   ...
   - [Изменение №n]
   ```

   Пример:

   ```
   #62

   - Внесены изменения в README.md, добавлены инструкции по началу работы в проекте
   - Добавлены конфигурационные файлы для Jest
   - Настроена отладка приложения в режиме разработки, инструкции по настройке IDE добавлены в README.md
   ```

### Витрина компонентов

В качестве витрины компонентов для отображения размещенных в библиотеке компонентов используется [storybook](https://storybook.js.org/)

Истории и документация компонентов позволяют увидеть варианты использования компонента с различными свойствами и примеры использования не вникая в код и логику компонента, что позволяет ускорить разработку при использовании библиотеки.
Поэтому, при создании историй/документации компонентов необходимо учитывать различные **варианты использования** и различные **комбинации входных параметров**.

#### Соглашения по витрине компонентов

Истории компонентов должны соответствовать формату `*.stories.(ts|tsx)`.

Истории и вспомогательные файлы должны размещаться в директории `__stories__` в директории компонента.

#### Требования к историям/документации

**История должна содержать:**

- Вариант использования компонента;
- Наименование, соответствующее варианту использования;
- Необходимые начальные свойства (их можно изменить в UI Storybook на вкладке _Controls_).

**Документация/блок историй должны содержать:**

- Наименование компонента с префиксом группы, например `desktop/MyComponent`;
- Текстовое описание компонента;
- Блок кода с примером использования компонента;
- Если компонент принимает в параметрах функции-обработчики, то они должны быть объявлены как [action](https://storybook.js.org/docs/react/essentials/actions), для отображения выполнения обработчиков на вкладке _Actions_ в UI.
  Для свойств-обработчиков, чьи имена начинаются с `on*` добавление [action](https://storybook.js.org/docs/react/essentials/actions) происходит автоматически, дополнительных действий с ними не требуется.

### Отладка

Для отладки иногда полезно подключить данную библиотеку к проекту напрямую, сделав `symlink` в файловой системе.

1. Клонируем библиотеку. Заходим в папку этой библиотеки и делаем `npm run build && cd build && npm link`. Это нужно сделать 1 раз.
2. Заходим в папку проекта к которому подключена библиотека и делаем `npm link "@sima-land/moleculas"`. Это
   приведет к тому, что код в node_modules будет заменен на ссылку в вашей FS.
3. Для возврата в нормальный режим `npm unlink "@sima-land/moleculas" && npm install --force`

Примечание: Если возникли ошибки с реактом/хуками, и одной из проблем в логе ошибки значится дублирование react'a,
следует сделать линк реакта молекул с реактом проекта:

1. Директория проекта куда добавлены молекулы `cd ./node_modules/react && yarn link`.
2. Директория молекул `npm link "react"`.
