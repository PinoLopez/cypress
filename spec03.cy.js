describe('Prueba con Cypress', () => {
  it('Navega a la sección de Openness de Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Openness');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Openness');

    // 2.Aserciones adicionales en la sección de Openness
    cy.get('#Openness').should('be.visible'); // Verifica que el encabezado de la sección "Openness" esté visible

      });
});