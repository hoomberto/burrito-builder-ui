describe('User Flow', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {fixture: 'orders.json'})
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

  it('User should be able to select ingredients and see them render as they are being added to order list', () => {
    cy.get('#carnitas').click()
    cy.get('#orderSection').contains('carnitas')
    cy.get('button:nth-of-type(2)').click()
    cy.contains('Order: carnitas, steak')
  })

  it('User should be presented with an error if trying to submit form without entering name in conjunction with selecting ingredients', () => {
    cy.get('#carnitas').click()
    cy.get('#orderSection').contains('carnitas')
    cy.get('button:nth-of-type(2)').click()
    cy.contains('Order: carnitas, steak')
    cy.get('#submitBtn').click()
    cy.contains('Please make sure your name is entered and at least one ingredient is selected.')
  })

  it('User should be able to submit an order after entering their name and selecting at least one ingredient', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        name: 'Successful',
        ingredients: ['test1', 'test2', 'test3']
      }
    })
    cy.get('input').type('Siri')
    cy.get('#carnitas').click()
    cy.get('button:nth-of-type(2)').click()
    cy.get('button:nth-of-type(3)').click()
    cy.get('#submitBtn').click().then(() => {
      cy.contains('Nothing selected')
    })
  })

})
