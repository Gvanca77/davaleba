describe(' Login User with incorrect email and password', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    //4. Click on 'Signup / Login' button//
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    //5. Verify 'Login to your account' is visible//
    cy.get('.login-form > h2')
    cy.contains('Login to your account').should('be.visible');
    //6. Enter correct email address and password//
    cy.get('[data-qa="login-email"]').type('test123+test1@gmail.com');
      
    cy.get('[data-qa="login-password"]').type('test123');
    //7. Click 'login' button//
    cy.get('[data-qa="login-button"]').click();
    //8. Verify error 'Your email or password is incorrect!' is visible
    cy.get('.login-form > form > p')
    cy.contains('Your email or password is incorrect!').should('be.visible');




  })
})