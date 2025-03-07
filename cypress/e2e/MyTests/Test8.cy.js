
import CheckOutPage from "../PageObjects/CheckOutPage"
import FinalPage from "../PageObjects/FinalPage"
import HomePage from "../PageObjects/HomePage"
import ProductsPage from "../PageObjects/ProductsPage"

describe('My Gen Test Suite', function() {

  before(function() {
      //runs once before all tests in the block
      cy.fixture('example').then(function(data)
    {
      this.data=data
    })
  })

  it('My PageObject test case',function()  {
    //Cypress.config('defaultCommandTimeout', 8000)
    const homePage = new HomePage()
    const productPage = new ProductsPage()
    const checkoutPage = new CheckOutPage()
    const finalPage = new FinalPage()

   //cy.visit(this.data.testUrl)
   cy.visit(Cypress.env('url')+"/angularpractice/")

    homePage.getEditBox().type(this.data.name)
    homePage.getEmail().type(this.data.email)
    homePage.getpassword().type(this.data.password)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()

    //cy.pause()
    //custom command
    
    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    });
    
    productPage.getCheckout().click()

    //CheckOutPage
    /*
    var sum =0 
    checkoutPage.getProducts().each(($el, index, $list)=>
    {
    const actualText=$el.text()
    var res = actualText.split(" ")
    res=res[1].trim()
    sum=Number(sum)+Number(res)
    }).then(function()
     {
    cy.log(sum)
    })
    checkoutPage.getProductsPrice().then(function(element)
    {
    const finalV = element.text()
    var finalR = finalV.split(" ")
    var total =finalR[1].trim()
    expect(Number(total)).to.equal(sum)
    })
   */
    cy.verifyProductTotal(checkoutPage);

    checkoutPage.getCheckout().click()

    //Final Page
    finalPage.getCountry().type(this.data.country)
    finalPage.confirmCountry().click()
    finalPage.getCheckBox().click({ force: true })
    finalPage.getPurchase().click()
    //finalPage.getConfmessage().should('contains.text', this.data.confMesagge)
    finalPage.getConfmessage().then(function(element)
  {
    const actualText=element.text()
    expect(actualText.includes(this.data.confMesagge)).to.be.true
  })

    
  })   
})

