
describe('Login test cases for SauceDemo', () => {
  const validUsername = 'standard_user';
  const validPassword = 'secret_sauce';

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  //TC - 01 
  it('Verify URL should load login page', () => {
    cy.get('.login_logo').should('be.visible');
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible')
  });

  //TC-02
  it('Verify with Valid username and password login should be successfull', () => {
    cy.login(validUsername, validPassword);
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
  });

// TC-03
it('Verify with Invalid username and password error should be displayed', () => {
  cy.get('[data-test="username"]').type('stand_us');
  cy.get('[data-test="password"]').type('wrongpassword');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'Username and password do not match');
});

// TC-04
it('Verify with InValid username and Valid password error should be displayed', () => {
  cy.get('[data-test="username"]').type('stand_us');
  cy.get('[data-test="password"]').type(validPassword);
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'Username and password do not match');
});

// TC-05
it('Verify with Valid username and InValid password error should be displayed', () => {
  cy.get('[data-test="username"]').type(validUsername);
  cy.get('[data-test="password"]').type('wrongpassword');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'Username and password do not match');
});

// TC-06
it('Verify with empty username error should be displayed', () => {
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="password"]').type(validPassword);
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Username is required');
});

// TC-07
it('Verify with empty password error should be displayed', () => {
  cy.get('[data-test="username"]').type(validUsername);
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Password is required');
});

// TC-08
it('Verify with empty username and password error should be displayed', () => {
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Username is required');
});

// TC-09
it('Verify login with locked out user error should be displayed', () => {
  cy.login('locked_out_user', validPassword);
  cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Sorry, this user has been locked out');
});



});