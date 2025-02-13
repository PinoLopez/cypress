describe('Prueba con Cypress', () => 
    {
    it('Navega a la sección de Access to content de Wikipedia', () => 
        {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Access_to_content');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Access_to_content');
  
      // 2. Aserciones básicas en la sección de Access to content
      cy.get('#Access_to_content').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales (adaptar a la página)
      cy.get('#Access_to_content').within(() => {
       
        // Busca un texto específico 
        cy.contains('content').should('be.visible'); // verifica si el texto "content" está presente
      });
    });
  });