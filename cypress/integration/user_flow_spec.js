describe('User Flow', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {fixture: 'orders.json'})
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        name: 'Siri',
        ingredients: ['test1', 'test2', 'test3']
      }
    })
    cy.visit('localhost:3000/')
  })


  it('User should be able to enter their name into input field', () => {
    cy.get('input').type('Siri')
    cy.get('input').should('have.value', 'Siri')
  })

  it('User should be presented with an error if trying to submit form without selected ingredients', () => {
    cy.get('input').type('Siri')
    cy.get('#submitBtn').click()
    cy.contains('Please make sure your name is entered and at least one ingredient is selected.')
  })
})
