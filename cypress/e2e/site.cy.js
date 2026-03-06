describe('Formulário Newsletter', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("https://qualidade.apprbs.com.br/site")
  })



  it('Deve validar email inválido', () => {
    cy.get('.form-cell', { timeout: 10000 }).within(() => {
      cy.get('[name="pessoa.nome"]').should('be.visible').realClick().type('Caio')
      cy.get('[placeholder="email@exemplo.com"]').should('be.visible').realClick().type('emailErrado.net') 
      cy.get('[name="rbBtnNext"]').should('be.disabled')
      cy.contains('Preencha este campo')
    })
  })

  it('Deve enviar com dados válidos', () => {
    cy.get('.form-cell', { timeout: 10000 }).within(() => {
      cy.get('[name="pessoa.nome"]').should('be.visible').realClick().type('Henrique')
      cy.get('[placeholder="email@exemplo.com"]').should('be.visible').realClick().type('henrique@email.com')
      cy.get('[name="rbBtnNext"]').should('be.visible').realClick()
      
      cy.contains('Sucesso')
    })
  })

})