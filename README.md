# Modulebank test job
This is the test job for hiring to **[Modulbank](https://modulbank.ru)**.

## Install
```
git clone git@github.com:maksimdegtyarev/modulebank-test.git
cd modulebank-test
```
then
```
npm install
```
or
```
yarn install
```
then
```javascript
npm run-script build
```
then open ./dist/index.html in your favourite browser.



# Тестовое задание

## Задача
Необходимо сделать проект в котором выводится список компаний, при клике на компанию, выводится карточка компании, в карточке компании есть кнопка редактировать которая открывает форму редактирования полей и кнопкой сохранить, при клике сохранить нужно просто выводить снизу карточку компании с новыми данными (без бекенда). компания содержит в себе след. поля
- ID
- Имя
- ОГРН
- Тип компании (ИП, ООО)
- Дату регистрации
- Активен или нет

## Что нужно сделать:
   - Компонент список компаний (внутри могут и другие компоненты, тут не ограничений)
   - Компонент карточки компании 
   - Компонент для редактирования компании
       - Имя, ОГРН - текстовое поле
       - Тип компании - выпадающий список из ООО, ИП
       - Дата регистрации - использовать какой нибудь datepicker
       - Активен или нет (чекбокс)
   - При открытии сайта показывается список, при клике роут меняется на /company/{ID}, при редактировании /company/edit/{ID}
   - Верстка не интересна, не тратье на это свое время, пусть все будет минималистично.
   
## В качестве инструментария (стек React-Mobx)
  - использовать [react](https://reactjs.org/), [mobx](https://github.com/mobxjs/mobx)
  - сборка на [webpack](https://webpack.js.org/)
  - сделать доменную прослойку, в качестве вызова api использовать [axios](https://github.com/axios/axios), чтобы запросы не падали сделать мокирование запросов
  - в качестве конструктора формы использовать библиотеку [mobx-react-form](https://github.com/foxhound87/mobx-react-form)
  - роутинг [react-router v4](https://github.com/ReactTraining/react-router)
  
## В качестве инструментария (стек AngularJS (1.5.x))
  - использовать AngularJS (1.5)
  - сборка можно webpack или gulp
  - сделать доменную прослойку, в качестве вызова api использовать [axios](https://github.com/axios/axios), чтобы запросы не падали сделать мокирование запросов
  - Вместо директив должны быть компоненты с контроллерами в es6 стиле (классы контроллеры)
  - $scope не использовать
  
## В качестве инструментария (стек React-Redux)
  - использовать [react](https://reactjs.org/), [redux](https://redux.js.org/)
  - сборка на [webpack](https://webpack.js.org/)
  - сделать доменную прослойку (предпочтительно redux-saga), в качестве вызова api использовать [axios](https://github.com/axios/axios), чтобы запросы не падали сделать мокирование запросов
  - в качестве конструктора формы использовать библиотеку [redux-form](https://redux-form.com/)
  - роутинг [react-router v4](https://github.com/ReactTraining/react-router)
