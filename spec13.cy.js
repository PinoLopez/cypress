describe('Prueba con Cypress', () => {
    it('Navega a la sección de See also de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#See_also');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#See_also');
  
      // 2. Aserciones básicas en la sección de See also
      cy.get('#See_also').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#See_also').within(() => {
  
        // Busca un texto específico 
        cy.contains('also').should('be.visible') // verifica si el texto "also" está presente
  
        });
    });
  });