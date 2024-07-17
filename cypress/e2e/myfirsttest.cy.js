describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').should('be.visible').should('be.enabled')
    cy.get('#password').should('be.visible').should('be.enabled')
    cy.get(':nth-child(1) > label').should('contain','Username')
    cy.get('#submit').should('be.visible').should('be.enabled')
    cy.get(':nth-child(2) > label').should('contain','Password')
  })
})