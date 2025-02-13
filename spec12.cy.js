describe('Prueba con Cypress', () => {
    it('Navega a la sección de Related projects de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Wikipedia#Related_projects');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Wikipedia#Related_projects');
  
      // 2. Aserciones básicas en la sección de Related projects
      cy.get('#Related_projects').should('be.visible'); // Verifica que el encabezado esté visible
  
      // 3. Aserciones adicionales
      cy.get('#Related_projects').within(() => {
  
        // Busca un texto específico
        cy.contains('projects').should('be.visible'); // verifica si el texto "projects" está presente
        
      });
    });
  });