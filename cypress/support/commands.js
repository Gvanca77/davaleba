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
// Cypress.Commands.overwrite('visit', (originalFn, url, options)
// 
//  => { ... })

Cypress.Commands.add('registeruser', (username, password) => { 

    cy.visit('https://www.automationexercise.com/');
    //Click on 'Signup / Login' button
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').type('Gvanca1');
    cy.get('#loginFrm_password').type('Gvanca123');
    cy.get('#loginFrm > fieldset > .btn').click();
})
    