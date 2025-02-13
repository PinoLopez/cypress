describe('Prueba con Cypress en Talk:Wikipedia', () => {
    it('Navega a la página de discusión de Wikipedia', () => {
      cy.visit('https://en.wikipedia.org/wiki/Talk:Wikipedia');
  
      // 1. Verifica que la URL final sea la correcta 
      cy.url().should('eq', 'https://en.wikipedia.org/wiki/Talk:Wikipedia');
  
      // 2. Aserciones básicas en la página de discusión
      cy.title().should('contain', 'Talk:Wikipedia'); // Verifica el título de la página
        
      // Verifica la presencia de elementos específicos
      cy.get('#mw-content-text').should('be.visible'); // Verifica que el contenido principal esté visible
  
      // Busca texto específico dentro de un elemento
      cy.get('#mw-content-text').within(() => {
        cy.contains('Wikipedia').should('be.visible'); // Verifica si el texto "Wikipedia" está presente
        cy.contains('This talk page is only for discussions concerning the improvement').should('be.visible');
      });
  
      // Verifica la presencia de enlaces
      cy.get('a').should('have.attr', 'href'); // Verifica que todos los enlaces tengan el atributo href
  
      // Verifica la cantidad de elementos 
      cy.get('li').should('have.length.greaterThan', 1); // Verifica que haya más de 1
  
    });
  });