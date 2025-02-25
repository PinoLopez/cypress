const { defineConfig } = require('cypress'); // Se requiere solo una vez

module.exports = defineConfig(
  {
  e2e: 
  {
    setupNodeEvents(on, config)
     {
      // implement node event listeners here 
    },
    supportFile: false, // Deshabilita el archivo de soporte 
    specPattern: 'spec*.cy.js',  // para todos los archivos
  },
  chromeWebSecurity: false, 
  
}); // Cierra el objeto de configuración y el llamado a defineConfig