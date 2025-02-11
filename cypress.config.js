const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    screenshotsFolder: "cypress/screenshots", // Screenshots directory
    videosFolder: "cypress/videos", // Video recordings directory
    chromeWebSecurity: false, // Disable security checks (useful for cross-origin tests)
    defaultCommandTimeout: 10000, // Time before a Cypress command fails
    pageLoadTimeout: 60000, // Maximum time for a page to load
    viewportWidth: 1280, // Set browser viewport width
    viewportHeight: 720, // Set browser viewport height
    retries: 2, // Number of retries on test failure
    trashAssetsBeforeRuns: true,
  },
  video: true,
});
