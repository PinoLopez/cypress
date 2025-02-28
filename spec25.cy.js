describe('Prueba en Wikipedia: Andalucía', () => {
    it('Verifica información sobre Andalucía', () => {
        cy.visit('https://en.wikipedia.org/wiki/Andalusia');

        // Verifica la URL y el título
        cy.url().should('include', '/wiki/Andalusia');
        cy.title().should('contain', 'Andalusia');

        // Verifica que el contenido principal esté visible
        cy.get('#content').should('be.visible');

        // Verifica la presencia de palabras clave dentro del contenido
        cy.get('#content').within(() => {
            cy.contains('autonomous community').should('be.visible');
            cy.contains('culture').should('be.visible');
        });

        // Verifica que los enlaces tengan el atributo href
        cy.get('a').should('have.attr', 'href');

        // Verifica que haya más de 10 enlaces
        cy.get('a').should('have.length.greaterThan', 10);
    });
});