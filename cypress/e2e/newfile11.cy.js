describe('registracia', () => {
    it('passes', () => {
  
      cy.visit('https://automationteststore.com/')
      cy.fixture("newFile.json").then((testdata)=>{
        cy.register(testdata.Email,testdata.Password)
      })
      
  
  
  
  
  
    })
  })