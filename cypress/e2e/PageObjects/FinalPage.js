class FinalPage
{
getCountry()
{
    return cy.get('#country')
}

confirmCountry()
{
    return cy.get('.suggestions > ul > li > a')
}

getCheckBox()
{
    return cy.get('#checkbox2')
}

getPurchase()
{
    return cy.get('.ng-untouched > .btn')
}

getConfmessage()
{
    return cy.get('.alert')
}


}

export default FinalPage;