// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('register', (FirstName, LastName, Email, Password, ConfirmPassword) => { 
    cy.get('#FirstName').type(FirstName)
    cy.get('#LastName').type(LastName)
    cy.get('#Email').type(Email)
    cy.get('#Password').type(Password)
    cy.get('#ConfirmPassword').type(ConfirmPassword)
    cy.get('#register-button').click()
})
Cypress.Commands.add('login', (Email,Password) => { 
    cy.get('#Email').type(Email)
    cy.get('#Password').type(Password)
    cy.get('[class="button-1 login-button"]').click()
})
Cypress.Commands.add('klik', (locator) => { 
    cy.get(locator)
    .should('be.visible')
    .click()
})

