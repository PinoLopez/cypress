describe('Prueba con Cypress', () => {
  it('Navega a la sección de Reception de Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Reception');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Reception');

    // 2. Aserciones adicionales en la sección de Reception
    cy.get('#Reception').should('be.visible'); // Verifica que el encabezado de la sección "Reception" esté visible

     });
  });