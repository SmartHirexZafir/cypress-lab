describe('Assertions, Aliases and Hooks', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Assertion Practice: visible, text, attr', () => {
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="login-button"]').should('have.value', 'Login')
    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username')
  })

  it('Negative Assertion: error should not exist on load', () => {
    cy.get('[data-test="error"]').should('not.exist')
  })

  it('Alias Practice: save and reuse element', () => {
    cy.get('[data-test="username"]').as('usernameField')
    cy.get('@usernameField').type('standard_user')
    cy.get('@usernameField').should('have.value', 'standard_user')
  })

  it('Custom Command: login using custom command', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.inventory_list').should('be.visible')
  })
})