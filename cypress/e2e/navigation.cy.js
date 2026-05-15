describe('Navigation and Form Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Navigation Test 1: Click menu link', () => {
    cy.get('.bm-burger-button').click()
    cy.get('#inventory_sidebar_link').click()
    cy.get('.inventory_list').should('be.visible')
  })

  it('Navigation Test 2: Visit 2 pages in sequence', () => {
    cy.url().should('include', 'inventory')
    cy.get('[data-test="item-4-title-link"]').click()
    cy.url().should('include', 'inventory-item')
  })

  it('Form Test 1: Add item and checkout form', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Ali')
    cy.get('[data-test="lastName"]').type('Ahmed')
    cy.get('[data-test="postalCode"]').type('54000')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_info').should('be.visible')
  })
})