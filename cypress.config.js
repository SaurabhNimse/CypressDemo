const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addplugin');
watchForFileChanges: false
  
module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',            // html report
  e2e: {
 
    setupNodeEvents(on, config) {
      
      on('task',{downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);  // html report
      // implement node event listeners here
    },
  },
});
