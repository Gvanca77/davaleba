Cypress.Commands.add("register", (mail, password)=> {
    
          cy.get('#customer_menu_top > li > a').click()
          cy.get('#accountFrm > fieldset > .btn').click()
          cy.get('#AccountFrm_firstname').type('Gvanca')
          cy.get('#AccountFrm_lastname').type('Abramishvili')
          cy.get('#AccountFrm_email').type(mail)
          cy.get('#AccountFrm_address_1').type('19lake ave')
          cy.get('#AccountFrm_city').type('East Bruswick')
          cy.get('#AccountFrm_zone_id').select('Aberdeen')
          cy.get('#AccountFrm_postcode').type("08816")
          cy.get('#AccountFrm_country_id').select("United Kingdom")
          cy.get('#AccountFrm_loginname').type('Gvanca112')
          cy.get('#AccountFrm_password').type(password)
          cy.get('#AccountFrm_confirm').type(password)
          cy.contains('I have read and agree to the Privacy Policy').should('be.visible')
          cy.get('.col-md-6').click()
          cy.get('.modal-footer > .btn').click()
          cy.get('#AccountFrm_agree').click()
          cy.contains('Continue').should('be.visible')
          cy.get('.col-md-2 > .btn').click();

        }

    )
          
  