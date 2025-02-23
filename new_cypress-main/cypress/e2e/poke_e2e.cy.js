describe('Автотест e2e на покупку нового аватара', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('.auth__title').should('be.visible').contains('Битва покемонов');
         cy.get(':nth-child(1) > .auth__input').type('ale-akokhov@yandex.ru');
         cy.get('#password').type('Liberation1');
         cy.get('.auth__button').should('be.visible').contains('Войти').click();
         
         cy.wait(2000);

         cy.get('.header__container > .header__id').should('be.visible').click();

         cy.wait(2000);

         cy.get('[href="/shop"]').should('be.visible').contains('Смена аватара').click();

         cy.wait(2000);

         cy.get('.available > button').first().should('be.visible').contains('Купить').click();
         cy.get('.pay__pay-header-v2').should('be.visible').contains('Карта');
         cy.get('.credit').type('4444 3333 2222 1111');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('1025');
         cy.get('.k_input_name').type('alexandr akokhov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     })
 }) 