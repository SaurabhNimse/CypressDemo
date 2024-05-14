it('Google page', ()=>{
    cy.visit('http://www.google.com/')

    cy.get('.gLFyf').type('Cypress.io{Enter}')

})

it('Testing read write',()=>{

    cy.fixture('example.json').then((data) =>{
cy.log(data.name),
cy.log(data.email)
    })
})

    it('Testing read write 2',()=>{

        cy.readFile('cypress/fixtures/example.json').then((data) =>{
    cy.log(data.name),
    cy.log(data.email)
        })
    })

    it('Testing read write 2',()=>{

        cy.writeFile('sample.txt',"Hello Saurabh \n")

    })
