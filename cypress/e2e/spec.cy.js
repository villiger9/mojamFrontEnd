describe('Cypress page Test', () => {
  it('clicking "Socials"', () => {
    cy.visit('/index.html')

    cy.contains('Socials').click()

    // Should be URL
    cy.url().should('include', '/socials.html')
  })
  it('clicking "About"', () => {
    cy.visit('http://127.0.0.1:5501/index.html')

    cy.contains('About').click()

    // Should be URL
    cy.url().should('include', 'http://127.0.0.1:5501/about.html')
  })
  it('clicking "Portfolio"', () => {
    cy.visit('http://127.0.0.1:5501/index.html')

    cy.contains('Portfolio').click()

    // Should be URL
    cy.url().should('include', 'http://127.0.0.1:5501/mojamconnect/index.html')
  })
  it('clicking "Education"', () => {
    cy.visit('http://127.0.0.1:5501/index.html')

    cy.contains('Education').click()

    // Should be URL
    cy.url().should('include', 'http://127.0.0.1:5501/mojameduc/index.html')
  })
})