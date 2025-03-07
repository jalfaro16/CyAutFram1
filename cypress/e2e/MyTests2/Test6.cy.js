

describe('My Third Test Suite', () => {
  it('My 3er test case', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    //Search for a item in the table and then print the next value in the same row
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

  const name=$e1.text()
  if (name.includes('Python'))
  {
  cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
  {
    const priceValue = price.text()
    expect(priceValue).to.equal('25')
  })
  }   
  }) 

/// Mouse over demo
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')

cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Reload').click()

cy.contains('Top').click({force: true})
cy.url().should('include','top')


  })   
})