

describe('Test cases for POST operation', () => {

    const baseUrl = 'https://reqres.in/api';
  
    it('POST - Create User', () => {
      const newUser = {
        name: 'Poorvi',
        job: 'IT'
      };
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        body: newUser
      }).then((response) => {

        // Asserting the response status
        expect(response.status).to.eq(201);
  
        // Asserting the response body properties
        expect(response.body).to.have.property('name', newUser.name);
        expect(response.body).to.have.property('job', newUser.job);
  
        //Asserting properties 'id' and 'createdAt'
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
      });
    });
  
  });