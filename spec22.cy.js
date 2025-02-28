describe('Prueba en Wikipedia: Land Rover Defender', () => {
  it('Verifica información sobre Land Rover Defender', () => {
      cy.visit('https://en.wikipedia.org/wiki/Land_Rover_Defender');

      // Verifica la URL y el título
      cy.url().should('include', '/wiki/Land_Rover_Defender');
      cy.title().should('contain', 'Land Rover Defender');

      // Verifica que el contenido principal esté visible
      cy.get('#content').should('be.visible');

      // Verifica la presencia de palabras clave dentro del contenido
      cy.get('#content').within(() => {
          cy.contains('Land Rover Defender').should('be.visible');
          cy.contains('British Leyland').should('be.visible');
          cy.contains('Solihull').should('be.visible');
      });

      // Verifica que la imagen del infobox esté visible
      cy.get('.infobox-image img').should('be.visible');

      // Verifica que los enlaces tengan el atributo href
      cy.get('a').should('have.attr', 'href');

      // Verifica que haya más de 10 enlaces
      cy.get('a').should('have.length.greaterThan', 10);
  });
});