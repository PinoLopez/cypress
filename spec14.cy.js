describe('Prueba con Cypress', () => {
    it('Navega a la sección de Notes de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Notes');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Notes');
  
      // 2. Aserciones básicas en la sección de Notes
      cy.get('#Notes').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#Notes').within(() => {
  
        // Busca un texto específico 
        cy.contains('Note').should('be.visible'); // Ejemplo: verifica si el texto "Note" está presente
  
        });
    });
  });