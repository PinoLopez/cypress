describe('Prueba con Cypress', () => {
    it('Navega a la sección de Operation de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Operation');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Operation');
  
      // 2. Aserciones adicionales en la sección de Operation
      cy.get('#Operation').should('be.visible'); // Verifica que el encabezado de la sección "Operation" esté visible
    
      });
    }); 