Cypress.Commands.add('login', (validUsername, validPassword) => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').clear().type(validUsername);
    cy.get('[data-test="password"]').clear().type(validPassword);
    cy.get('[data-test="login-button"]').click();
  });

  Cypress.Commands.add('logout', (Logout) => {
    cy.get('#react-burger-menu-btn').click(); // Open the menu
    cy.get('#logout_sidebar_link').click();   // Click the logout link
  });