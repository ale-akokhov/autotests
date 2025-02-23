describe('Автотесты для формы логина и пароля', function () {

    beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio');   // Перейти на сайт
        cy.get('#forgotEmailButton').should('be.visible').contains('Забыли пароль?').should('have.css', 'color', 'rgb(0, 85, 152)'); // Кнопка содержит надпись "Забыли пароль?", видна, нужного цвета 
        cy.get('#form > .header').should('be.visible').contains('Форма логина'); // Заголовок содержит надпись "Форма логина", виден 
        cy.get('.link').should('be.visible').contains('qa.studio'); // Ссылка в футере содержит надпись "qa.studio", видна
         });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Крестик виден
        cy.get('.link').should('be.visible').contains('qa.studio'); // Ссылка в футере содержит надпись "qa.studio", видна
           });      

    it('Верный логин и верный пароль', function () {
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввести правильный пароль
         cy.get('#loginButton').should('be.visible').contains('Войти').click(); // Кнопка "Войти" видна, содержит текст "Войти", нажать кнопку 
         
         cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Заголовок сообщения содержит надпись "Авторизация прошла успешно", виден
         
     })

     it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').contains('Забыли пароль?').should('be.visible').should('have.css', 'color', 'rgb(0, 85, 152)').click(); // Кнопка содержит надпись "Забыли пароль?", видна, нужного цвета, нажать на кнопку

        cy.get('#forgotForm > .header').contains('Восстановите пароль').should('be.visible'); // Заголовок сообщения содержит надпись "Восстановите пароль", виден
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');  // Крестик виден
        cy.get('.link').should('be.visible').contains('qa.studio'); // Ссылка в футере содержит надпись "qa.studio", видна

        cy.get('#mailForgot').type('ale-akokhov@yandex.ru'); // Ввести e-mail
        cy.get('#restoreEmailButton').should('be.visible').contains('Отправить код').click();  // Кнопка "Отправить код" видна, содержит текст "Отправить код", нажать кнопку

        cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail'); // Заголовок сообщения содержит надпись "Успешно отправили пароль на e-mail", виден
    })

    it('Верный логин и НЕверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio17');  // Ввести НЕправильный пароль
        cy.get('#loginButton').should('be.visible').contains('Войти').click(); // Кнопка "Войти" видна, содержит текст "Войти", нажать кнопку 
        
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Заголовок сообщения содержит надпись "Такого логина или пароля нет", виден
    })

    it('НЕверный логин и верный пароль', function () {       
        cy.get('#mail').type('ale-akokhov@yandex.ru'); // Ввести НЕправильный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввести правильный пароль
        cy.get('#loginButton').should('be.visible').contains('Войти').click(); // Кнопка "Войти" видна, содержит текст "Войти", нажать кнопку 
        
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Заголовок сообщения содержит надпись "Такого логина или пароля нет", виден
    })

    it('Логин без @ и верный пароль', function () {
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');  // Ввести правильный пароль
        cy.get('#loginButton').should('be.visible').contains('Войти').click(); // Кнопка "Войти" видна, содержит текст "Войти", нажать кнопку 
        
        cy.get('#messageHeader').should('be.visible').contains('Нужно исправить проблему валидации'); // Заголовок сообщения содержит надпись "Нужно исправить проблему валидации", виден
    })

    it('Верный ЛоГиН и верный пароль', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввести правильный пароль
        cy.get('#loginButton').should('be.visible').contains('Войти').click(); // Кнопка "Войти" видна, содержит текст "Войти", нажать кнопку 
        
        cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Заголовок сообщения содержит надпись "Авторизация прошла успешно", виден
    })


 }) 