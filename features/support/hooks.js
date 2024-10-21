const { After, Before, BeforeAll } = require('@cucumber/cucumber');
const { getEnv } = require('../helper/env/EnvManager');
const { BrowserManager } = require('../helper/browsers/BrowserManager')
const { EnvManager } = require('../helper/env/EnvManager')

let browser;
let context;
let browserManager = new BrowserManager()
let envManager = new EnvManager()

BeforeAll(async function () {
    envManager.getEnv();
    browser = await browserManager.invokeBrowser();
});

Before(async function () {
    context = await browser.newContext();
    this.page = await context.newPage();

});

After(async function () {
    console.log("Test execution done")
});