describe('Prueba con Cypress', () => {
    it('Navega a la sección de Cultural influence de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Cultural_influence');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Cultural_influence');
  
      // 2. Aserciones básicas en la sección de Cultural influence
      cy.get('#Cultural_influence').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#Cultural_influence').within(() => {
  
        // Busca un texto específico 
        cy.contains('influence').should('be.visible'); // Ejemplo: verifica si el texto "influence" está presente
      });
    });
  });