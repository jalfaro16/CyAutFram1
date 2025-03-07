
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My TC #7 MyTest Suite3', () => {
  it('My #7-3 Test Case', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.frameLoaded('#courses-iframe')
    //cy.iframe().find("a[href*='mentorship']").eq(0).click()
    //cy.iframe().find("h1[class*='pricing-title']")
    //.should('have.length',2)

cy.get('#courses-iframe').then(($iframe) => {
  const doc = $iframe.contents().find('body'); 
  cy.wrap(doc).find("a[href*='mentorship']").eq(0).click()
  cy.wrap(doc).find("h1[class*='pricing-title']").should('have.length',2)
});

  

  })   
})