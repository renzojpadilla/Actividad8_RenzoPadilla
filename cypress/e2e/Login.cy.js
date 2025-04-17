describe('Seleccion de elementos por CSS',()=>{
    beforeEach('Navegar en saucedemo',()=>{
        cy.visit('https://www.saucedemo.com/v1/')  //aca damos la intruccion de ir a la pagina a testear.
       
    })


    // CP1 - caso de prueba donde usuario y contraseña son correctos.

    it('prueba login con id', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
       
        //cy.loginOK()
    });


    //CP2 - caso de prueba donde usuario esta bloqueado.

    it('Validar login con locked_out_user',()=>{
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain','Sorry, this user has been locked out.')
    })

    //CP3 - caso de prueba donde usuario tiene problemas para ingresar

    it('Validar login con user problem_user',()=>{
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_item').should('have.length', 6)
    })

  
})