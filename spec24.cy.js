describe('Prueba en Wikipedia: Linux', () => {
    it('Verifica información sobre Linux', () => {
      cy.visit('https://en.wikipedia.org/wiki/Linux');
  
      cy.url().should('include', '/wiki/Linux');
  
      cy.title().should('contain', 'Linux');
  
      cy.get('#content').should('be.visible');
  
      cy.get('#content').within(() => 
        {
        cy.contains('kernel').should('be.visible'); 
        cy.contains('Linus Torvalds').should('be.visible'); 
      });
  
      cy.get('.infobox-image img').should('be.visible');
  
      cy.get('a').should('have.attr', 'href');
  
      cy.get('a').should('have.length.greaterThan', 10);
  
      // Verifica la presencia de información específica en la infobox
      cy.get('.infobox').within(() => 
        {
        cy.contains('Unix').should('be.visible');
        cy.contains('Kernel').should('be.visible');
        cy.contains('Written in').should('be.visible');
      });
  
          // Verifica la presencia de información sobre distribuciones de Linux
      cy.get('#content').within(() => {
        cy.contains('Distributions').should('be.visible');
        cy.contains('Ubuntu').should('be.visible');
        cy.contains('Fedora').should('be.visible');
        cy.contains('Debian').should('be.visible');
      });
    });
  });