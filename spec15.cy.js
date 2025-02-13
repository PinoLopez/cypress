describe('Prueba con Cypress', () => {
    it('Navega a la sección de References de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#References');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#References');
  
      // 2. Aserciones básicas en la sección de References
      cy.get('#References').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#References').within(() => {
  
        // Busca un texto específico 
        cy.contains('Reference').should('be.visible'); // Ejemplo: verifica si el texto "Reference" está presente (común en las referencias)  
      
      });
    });
  });