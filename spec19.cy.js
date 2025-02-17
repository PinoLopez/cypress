describe('Prueba con Cypress en la Política de Privacidad de Wikimedia', () => 
{
  it('Navega a la página de Política de Privacidad', () => 
  {
    cy.visit('https://foundation.wikimedia.org/wiki/Policy:Privacy_policy');

    // 1. Verifica que la URL final sea la correcta 
    cy.url().should('include', 'Policy:Privacy_policy'); // include por si hay parámetros

    // 2. Aserciones básicas en la página
    cy.title().should('contain', 'Policy'); // Verifica el título de la página

    // 3. Verifica la presencia de elementos específicos
    cy.get('#content').should('be.visible'); // Verifica que el contenido principal esté visible

    // 4. Busca texto específico dentro de un elemento
    cy.get('#content').within(() => 
    { 
      cy.contains('personal information').should('be.visible'); // Verifica si el texto está presente 
      cy.contains('collect').should('be.visible'); // Verifica si el texto está presente 
    });

    // 5. Verifica enlaces
    cy.get('a').should('have.attr', 'href'); // Verifica que todos los enlaces tengan el atributo href

    // 6. Verifica la cantidad de elementos (ejemplo: verifica que haya al menos 10 enlaces)
    cy.get('a').should('have.length.greaterThan', 10); 

    // 7.  Verifica la presencia de un elemento con un ID específico
    cy.get('#footer').should('be.visible'); // Verifica que el footer esté visible 

  });
});