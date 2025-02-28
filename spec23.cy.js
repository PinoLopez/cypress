describe('Prueba en Wikipedia: Intel', () => 
    {
    it('Verifica información sobre Intel', () => 
        {
      cy.visit('https://en.wikipedia.org/wiki/Intel');
  
      cy.url().should('include', '/wiki/Intel');
  
      cy.title().should('contain', 'Intel');
  
      cy.get('#content').should('be.visible');
  
      cy.get('#content').within(() => 
        {
        cy.contains('semiconductor').should('be.visible'); 
        cy.contains('Santa Clara, California').should('be.visible'); 
      });
  
      cy.get('.infobox-image img').should('be.visible');
  
      cy.get('a').should('have.attr', 'href');
  
      cy.get('a').should('have.length.greaterThan', 10);
  
      // Verifica la presencia de información específica en la infobox
      cy.get('.infobox').within(() => {
        cy.contains('Founded').should('be.visible');
        cy.contains('1968').should('be.visible');
        cy.contains('Headquarters').should('be.visible');
      });
    });
  });