describe('Logout Tests for Saucedemo', () => {
    const validUsername = 'standard_user';
    const validPassword = 'secret_sauce';
  
    beforeEach(() => {
      cy.login(validUsername, validPassword);
      cy.url().should('include', '/inventory.html');
    });
  
    it('Verify user should be able to logout successfully and redirect to the login page', () => {
      // TC - 15 Verify user is logged out
      cy.logout();
      
      // TC - 16 -Verify redirection to the login page
      cy.url().should('include', '/');
      cy.get('[data-test="username"]').should('be.visible');
      cy.get('[data-test="password"]').should('be.visible');
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });