
describe('Test cases for GET operation', () => {

    const baseUrl = 'https://reqres.in/api';

it('GET - Single User', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/2`,
    }).then((response) => {

      // Asserting the response status
      expect(response.status).to.eq(200);

      // Asserting the response body properties
      expect(response.body).to.have.property('data');
      const user = response.body.data;
      expect(user).to.have.property('id', 2);
      expect(user).to.have.property('email');
      expect(user).to.have.property('first_name');
      expect(user).to.have.property('last_name');
      expect(user).to.have.property('avatar');
    });
  });
});