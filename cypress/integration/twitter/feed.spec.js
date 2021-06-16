/// <reference types="cypress" />

/* 
    3 partes importantes em cada nome do teste
        1. oq esta sendo testado
        2. sob que circunstancia, condicoes?
        3. qual o resultado esperado
 */
/* 
    O que fazer quando um servico externo(nao relacionado) esta fora?
        1. pedir pra corrigir
        2. isolar este servico do fluxo de teste(quando possivel)

    Uma alternativa usando um recurso chamado: cy.intercept
 */
/* 
    

 */    
describe('Twitter clone', () => {
  context('Feed', () => {
      //hooks - trechos
      beforeEach(() => {
        cy.intercept({
          // mapeamento da rota ou requisição
          method: 'GET',
          hostname: 'res.cloudinary.com'
        }, {
          // resposta que eu quero simular
          statusCode: 200,
          fixture: 'gato'
        })
      
        cy.login()
  
      });
      it('Quando estiver autenticado, devo visualizar o menu navegável', () => {
        cy.visit('/')

        cy.get('nav ul li')
          .should('be.visible')
          .and('have.length', 6)

          .each(($el, index, $list) => {

            let options = [
              'Home',
              'Explore',
              'Notifications',
              'Bookmarks',
              'Profile',
              'More'
            ]

            cy.log(index)

            cy.get($el)
              .find('span')
              .should('have.text', options[index])

          })
       });
  });
});