describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of running total', () => {
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 4)
  })

  it('should be able to multiply', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 20)
  })

  it('should be able to divide', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 3)
  })

  it('should be able to subtract', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 4)
  })

  it('should be able to add', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', 8)
  })

  it('sgould be able to perform multiple operations')
})