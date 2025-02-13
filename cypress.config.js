const { defineConfig } = require('cypress'); // Se requiere solo una vez, afuera

module.exports = defineConfig(
  {
  e2e: 
  {
    setupNodeEvents(on, config)
     {
      // implement node event listeners here (si es necesario)
    },
    supportFile: false, // Deshabilita el archivo de soporte (si es necesario)
    specPattern: 'spec*.cy.js',  // para todos los archivos
  },
}); // Cierra el objeto de configuración y el llamado a defineConfig