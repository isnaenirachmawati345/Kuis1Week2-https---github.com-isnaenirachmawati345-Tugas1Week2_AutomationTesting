const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demowebshop.tricentis.com/',
    env:{
      Login_url:'https://demowebshop.tricentis.com/login',
      Register_url:'https://demowebshop.tricentis.com/register'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:5000,
    browser:'chrome'
  },
});
