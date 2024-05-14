it('Assertion Demo', ()=>{

    cy.visit('https://example.cypress.io/')

    cy.contains('get').click()

    cy.get('#query-btn').should('contain', 'Button')
    cy.get('#query-btn').should('have.class','query-btn')
    cy.get('#query-btn').should('be.visible')
    cy.get('#query-btn').should('be.enabled')
})