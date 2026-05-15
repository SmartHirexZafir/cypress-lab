describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login Test 1: Valid login', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.inventory_list').should('be.visible')
  })

  it('Login Test 2: Wrong password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login Test 3: Empty fields', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})