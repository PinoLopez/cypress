describe('Prueba con Cypress', () => {
    it('Navega a la sección de External links de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#External_links');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#External_links');
  
      // 2. Aserciones básicas en la sección de External links
      cy.get('#External_links').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#External_links').within(() => {
  
        // Busca un texto específico 
        cy.contains('link').should('be.visible'); // verifica si el texto "link" está presente 
  
      });
    });
  });