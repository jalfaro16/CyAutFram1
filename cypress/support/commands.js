// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectProduct', (productName) => { 

    cy.get('h4.card-title').each(($el, index, $list) => {
      if($el.text().includes(productName))
      {
        cy.get('button.btn-info').eq(index).click()
      }
    })
})

Cypress.Commands.add('verifyProductTotal', (checkoutPage) => {
  let sum = 0;

  checkoutPage.getProducts().each(($el) => {
      const actualText = $el.text();
      let res = actualText.split(" ");
      res = res[1].trim();
      sum += Number(res);
  }).then(() => {
      cy.log(`Calculated sum: ${sum}`);
  });

  checkoutPage.getProductsPrice().then(($element) => {
      const finalText = $element.text();
      const finalParts = finalText.split(" ");
      const total = Number(finalParts[1].trim());

      expect(total).to.equal(sum);
  });
});