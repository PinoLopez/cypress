describe('Prueba con Cypress', () => {
    it('Navega a la sección de Further reading de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Further_reading');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Further_reading');
  
      // 2. Aserciones básicas en la sección de Further reading
      cy.get('#Further_reading').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#Further_reading').within(() => {
  
        // Busca un texto específico 
        cy.contains('reading').should('be.visible'); // verifica si el texto "reading" está presente 
       
      });
    });
  });