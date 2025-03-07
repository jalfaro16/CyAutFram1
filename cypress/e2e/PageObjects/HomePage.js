class HomePage
{
getEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}
getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender()
{
    return cy.get('select')
}
getEmail()
{
    return cy.get(':nth-child(2) > .form-control')
}
getpassword()
{
    return cy.get('#exampleInputPassword1')
}
getEntrepreneaur()
{
    return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage;