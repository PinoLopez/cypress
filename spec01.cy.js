describe('Prueba con Cypress', () => {
  it('Verifica el título de la página', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia');
    cy.title().should('eq', 'Wikipedia - Wikipedia');
  });
});
