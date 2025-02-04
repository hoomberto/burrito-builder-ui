describe('App spec', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {fixture: 'orders.json'})
    cy.visit('localhost:3000/')
  })

  it('App title should be visible on page', () => {
    cy.contains('Burrito Builder')
  })

  it('App starts without any orders', () => {
    cy.contains('Order: Nothing selected')
  })

  it('App renders with preexisting data from API', () => {
    cy.contains('PersonA')
    cy.contains('PersonB')
    cy.contains('PersonC')
  })
})
