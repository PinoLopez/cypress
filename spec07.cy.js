describe('Prueba con Cypress', () => 
  {
  it('Navega a la sección de Language editions de Wikipedia', () => 
    {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Language_editions');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Language_editions');

    // 2. Aserciones adicionales en la sección de Language editions
    cy.get('#Language_editions').should('be.visible'); // Verifica que el encabezado de la sección "Language editions" esté visible

    });

  });