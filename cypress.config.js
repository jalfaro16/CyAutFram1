const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    env: {
      url: "https://rahulshettyacademy.com",
      
    },
    retries: {
      runMode: 1,    // Retries when running via `cypress run`
      openMode: 0     // Retries when running via `cypress open`
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // Where the report will be saved
      overwrite: true,               // Overwrite previous reports
      html: true,                    // Generate HTML report
      json: true,                    // Generate JSON report
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
