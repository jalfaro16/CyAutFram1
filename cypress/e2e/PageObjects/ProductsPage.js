class ProductsPage
{
getCheckout()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

getProducts()
{
return cy.get('tr td:nth-child(4) strong')
}

}

export default ProductsPage;