describe('Prueba de búsqueda en Wikipedia: Victor Wooten', () => {
    it('Busca a Victor Wooten y verifica la información', () => {
            
      cy.visit('https://en.wikipedia.org/wiki/Victor_Wooten');
   
      cy.url().should('include', '/wiki/Victor_Wooten');
  
      // Aserciones básicas en la página de Victor Wooten
      cy.title().should('contain', 'Victor Wooten'); // Verifica el título de la página
  
      // Verifica la presencia de elementos específicos
      cy.get('#content').should('be.visible'); // Verifica que el contenido principal esté visible
  
      // Busca texto específico dentro de la página 
      cy.get('#content').within(() => 
        {
        cy.contains('Victor Wooten').should('be.visible'); // Verifica que el nombre esté presente
        cy.contains('musician').should('be.visible'); // Verifica que la palabra "musician" esté presente (puedes buscar otras palabras clave)
        cy.contains('bass guitar').should('be.visible'); // Verifica que la frase "bass guitar" esté presente
      });
  
      // Verifica la presencia de una imagen (puedes verificar atributos como src)
      cy.get('.infobox-image img').should('be.visible'); 
  
      // Verifica enlaces 
      cy.get('a').should('have.attr', 'href'); // Verifica que todos los enlaces tengan el atributo href
  
      // Verifica la cantidad de elementos (verifica que haya al menos 10 enlaces)
      cy.get('a').should('have.length.greaterThan', 10); 
    });
  });