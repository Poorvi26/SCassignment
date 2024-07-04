describe('Inventory page test cases for saucedemo', () => {
    const validUsername = 'standard_user';
    const validPassword = 'secret_sauce';
  
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.login(validUsername, validPassword);
        cy.url().should('include', '/inventory.html');
        cy.log('Successfully navigated to inventory page');
      });
  
      //TC - 10 Verify Inventory page displays 6 items
    it('Verify Inventory page', () => {
      cy.get('.inventory_list').should('be.visible');
      cy.get('.inventory_item').should('have.length', 6); // Assuming there are 6 items
    
  
      // TC - 11 Verify Adding Sauce Labs Onesie to the cart
      cy.get('.inventory_item')
        .contains('Sauce Labs Onesie')
        .parents('.inventory_item')
        .within(() => {
          cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        });
      
      // TC - 12 Verify the cart badge shows 1 item
      cy.get('.shopping_cart_badge').should('contain', '1');
  
      // TC - 13 Verify clicking on the cart icon to view the cart
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
  
      // TC - 14 Verify that the cart contains Sauce Labs Onesie
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Onesie');
    });
  });