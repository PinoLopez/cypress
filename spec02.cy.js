describe('Prueba con Cypress', () => 
  {
  it('Navega a la sección de Historia de Wikipedia', () => 
    {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#History');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#History');

    // 2. Aserciones adicionales en la sección de Historia
    cy.get('#History').should('be.visible'); // Verifica que el encabezado de la sección "History" esté visible
  });
});