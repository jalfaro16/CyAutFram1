

describe('My Third Test Suite', () => {
  it('My 3er test case', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

///popups and alerts
cy.get('#confirmbtn').click()

cy.get('#alertbtn').click()

//windows:alert
cy.on('window:alert',(str)=>
{
  expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm',(str)=>
  {
    expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
  })

  

  })   
})