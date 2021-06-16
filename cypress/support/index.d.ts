declare namespace Cypress {

    interface Chainable {
        /** /
        @example cy.login() - comando para login
         */
        login(): void

        /** /
        @example cy.token() - comando para gerar token
         */
        token(): void
    }
    
}