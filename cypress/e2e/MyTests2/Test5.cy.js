

describe('My Third Test Suite', () => {
  it('My 3er test case', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').invoke('removeAttr','target').click()

    // Wait for the new page to load
    cy.origin('https://www.qaclickacademy.com', () => {
      cy.url().should('include', 'qaclickacademy');
    });
    
    // Return to the original page
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Confirm that we are back on the original page
    cy.url().should('include', 'AutomationPractice');


    

  })   
})