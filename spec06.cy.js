describe('Prueba con Cypress', () => {
  it('Navega a la sección de Community de Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Community');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Community');

    // 2. Opcional: Aserciones adicionales en la sección de Community
    cy.get('#Community').should('be.visible'); // Verifica que el encabezado de la sección "Community" esté visible

  });
});