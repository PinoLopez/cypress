const { defineConfig } = require('cypress'); // Se requiere solo una vez, afuera

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here (si es necesario)
    },
    supportFile: false, // Deshabilita el archivo de soporte (si es necesario)
    specPattern: [ // specPattern va aquí, dentro de e2e
      'spec01.cy.js',
      'spec02.cy.js',
      'spec03.cy.js',
      'spec04.cy.js',
      'spec05.cy.js',
      'spec06.cy.js',
      'spec07.cy.js',
      'spec08.cy.js',
      'spec09.cy.js',
      'spec10.cy.js',
      'spec11.cy.js',
      'spec12.cy.js',
      'spec13.cy.js',
      'spec14.cy.js',
      'spec15.cy.js',
      'spec16.cy.js',
      'spec17.cy.js'
    ],
  },
}); // Cierra el objeto de configuración y el llamado a defineConfig