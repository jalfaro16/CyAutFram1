

describe('MyTC#1 - MyTestSuite3', () => {
  it('My #1-3 Test Case', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.product').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)

    //parent child

    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
    //consolo log will print in dev tools / console
    console.log('TestConsoleLog')
    })
    
    //iterating the list and searching for specific value
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }
    })
    //asset if logo is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //get a text from the web page
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })
    

  })
})