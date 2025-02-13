describe('Prueba con Cypress', () => {
  it('Navega a la sección de Policies and content de Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Policies_and_content');

    // 1. Verifica que la URL final sea la correcta
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Policies_and_content');

    // 2. Aserciones adicionales en la sección de Policies and content
    cy.get('#Policies_and_content').should('be.visible'); // Verifica que el encabezado de la sección esté visible

    });
});