describe('OrderForm', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {fixture: 'orders.json'})
    cy.visit('localhost:3000/')
  })

  it('Form should be visible on page', () => {
    cy.get('form')
  })

  it('Form has 12 ingredient options and a button for submitting', () => {
    cy.get('form').get('button').should('have.length', 13)
  })

  it('Form has a button prompting using to submit order ', () => {
    cy.get('#submitBtn').contains('Submit Order')
  })
})
