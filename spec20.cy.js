describe('Prueba con Cypress en Wikimedia:About', () => 
    {
    it('Navega a la página "Acerca de"', () => 
        {
      cy.visit('https://foundation.wikimedia.org/wiki/Wikimedia:About');
  
      // 1. Verifica que la URL final sea la correcta
      cy.url().should('include', 'Wikimedia:About'); // Usamos include por si hay parámetros
  
      // 2. Aserciones básicas en la página
      cy.title().should('contain', 'About'); // Verifica el título de la página
  
      // 3. Verifica la presencia de elementos específicos 
      cy.get('#content').should('be.visible'); // Verifica que el contenido principal esté visible
  
      // 4. Busca texto específico dentro de un elemento 
      cy.get('#content').within(() => {
        cy.contains('Wikimedia').should('be.visible'); // Verifica si el texto está presente
        cy.contains('Other').should('be.visible'); // Verifica si el texto está presente
        cy.contains('languages').should('be.visible'); // Verifica si el texto está presente
      });
  
      // 5. Verifica enlaces (puedes ser más específico verificando hrefs concretos)
      cy.get('a').should('have.attr', 'href'); // Verifica que todos los enlaces tengan el atributo href
  
      // 6. Verifica la cantidad de elementos (ejemplo: verifica que haya al menos 50 enlaces)
      cy.get('a').should('have.length.greaterThan', 50); // Puedes ajustar el selector y la cantidad
  
      // 7. Verifica la presencia de un elemento con un ID específico (ajustar selector si es necesario)
      cy.get('#footer').should('be.visible'); // Verifica que el footer esté visible
    
    });
  });