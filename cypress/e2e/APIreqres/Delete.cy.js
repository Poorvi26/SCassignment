

describe('Test cases for DELETE operation', () => {

    const baseUrl = 'https://reqres.in/api';
  
    it('DELETE - Delete User', () => {

      // Defining the user ID to delete
      const userId = 2;
  
      // Sending  DELETE request to delete the user
        cy.request({
        method: 'DELETE',
        url: `${baseUrl}/users/${userId}`,
      }).then((response) => {
        
        // Asserting the response status
        expect(response.status).to.eq(204);
      });
    });
  
  });
  