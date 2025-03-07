

describe('My Third Test Suite', () => {
  it('My 3er test case', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //will select a checkbox and then will verify if selected
    //multiple assertion a;so will check the value opf the checkbox
    cy.get('#checkBoxOption1').click().should('be.checked')
    .and('have.value','option1')

    //uncheck the checkbox
    cy.get('#checkBoxOption1').click().should('not.be.checked')
    
    //select multiple checkboxes
    cy.get('input[type="checkbox"]').check(['option2','option3'])


    //Static dropDowns
    cy.get('select').select('Option2').should('have.value','option2')

    //Dynamic dropDows
    cy.get('#autocomplete').type('cos')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text()==="Costa Rica")
      {
        cy.wrap($el).click()
      }
    })
    cy.get('#autocomplete').should('have.value','Costa Rica')
    
    ///verify if an element is visible or not
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#show-textbox').should('be.visible')

//radio button
    cy.get('[value="radio2"]').check().should('be.checked')
    .and('have.value','radio2')

///popups and alerts




  })   
})