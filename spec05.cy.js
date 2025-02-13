describe('Prueba con Cypress', () => {
  it('Navega a la sección de Governance de Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Governance');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Governance');

    // 2. Opcional: Aserciones adicionales en la sección de Governance
    cy.get('#Governance').should('be.visible'); // Verifica que el encabezado de la sección "Governance" esté visible

    // 3. verifica que haya un texto relacionado con "Governance"
    cy.contains('The Wikimedia Foundation').should('be.visible'); 
  });
});