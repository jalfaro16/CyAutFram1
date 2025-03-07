class CheckOutPage
{
getCheckout()
{
    return cy.contains('Checkout')
}
getProducts()
{
return cy.get('tr td:nth-child(4) strong')
}

getProductsPrice()
{
return cy.get('h3 > strong')
}

}

export default CheckOutPage;