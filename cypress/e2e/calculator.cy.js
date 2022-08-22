describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  xit('should update display of running total', () => {
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 4)
  })

  xit('should be able to multiply', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 20)
  })

  xit('should be able to divide', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 3)
  })

  xit('should be able to subtract', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 4)
  })

  xit('should be able to add', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 8)
  })

  xit('sgould be able to perform multiple operations', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 40)
  })

  xit('should diplay negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', -4)
  })

  xit('should display decimals', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 2.5)
  })

  xit('should display very large numbers', () => {
    cy.get('#number6').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 1961680)
  })

  it('should return 0 when divided by 0', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 0)
  })
})