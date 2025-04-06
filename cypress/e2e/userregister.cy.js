describe('register user', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    //Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
     // Verify 'New User Signup!' is visible
     cy.get('.signup-form > h2').should('have.text','New User Signup!');
     // Enter name and email address
    cy.get('[data-qa="signup-name"]').type('test1');
    cy.get('[data-qa="signup-email"]').type('testtesttes110100+test112@gmail.com');
    //Click 'Signup' button//
    cy.get('[data-qa="signup-button"]').click();
    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get(':nth-child(3) > .top > [data-qa="title"]').click();
    cy.get('[data-qa="password"]').type('test123');
    cy.get('[data-qa="days"]').select("2");
    cy.get('[data-qa="months"]').select('7');
    cy.get('[data-qa="years"]').select('1992');
    //Select checkbox 'Sign up for our newsletter!'//
    cy.get(':nth-child(7) > label').click();
    // Select checkbox 'Receive special offers from our partners!'//
    cy.get(':nth-child(8) > label').click();
    //. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type('test2');
    cy.get('[data-qa="last_name"]').type('test3');
    cy.get('[data-qa="company"]').type('test4');
    cy.get('[data-qa="address"]').type('test1,test2');
    cy.get('[data-qa="address2"]').type('test3');
    cy.get('[data-qa="country"]').select("United States");
    cy.get('form > :nth-child(17)').type("NJ");
    cy.get('form > :nth-child(18)').type("test");
    cy.get('[data-qa="zipcode"]').type("08816");
    cy.get('[data-qa="mobile_number"]').type('514440204');
    //Click 'Create Account button'//
    cy.get('[data-qa="create-account"]').click();
    //Verify that 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible')
    //Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();
    // Verify that 'Logged in as username' is visible
    cy.contains(' Logged in as test1').should('be.visible');
    //Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click();



  })
})



