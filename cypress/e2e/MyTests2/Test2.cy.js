

describe('My Second Test Suite', () => {
  it('My @nd test case', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

  
    //parent child
    cy.get('.products').as('productLocator')
    //iterating the list and searching for specific value
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }
    })
    
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    



  })
})