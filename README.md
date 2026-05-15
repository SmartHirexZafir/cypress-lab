



\## Website Tested

https://www.saucedemo.com



\## Task 1 - UI Test Suite

\- login.cy.js — 3 Login tests (valid, wrong password, empty fields)

\- navigation.cy.js — 2 Navigation tests + 1 Form test



\## Task 2 - Assertions, Aliases \& Custom Commands

\- task2.cy.js — Assertions, Negative assertion, Alias, Custom Command



\## How to Run Tests

1\. Install dependencies: npm install

2\. Open Cypress: npx cypress open

3\. Select E2E Testing

4\. Choose Chrome browser

5\. Click any spec file to run



\## Reflection

The most difficult part was understanding aliases in Cypress. 

At first I was confused about how cy.as() saves elements. 

After reading the docs and trying examples, I understood that aliases 

let you save a reference and reuse it later with cy.get('@alias'). 

This made the tests cleaner and easier to read.

