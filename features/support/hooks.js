const { After, Before } = require('@cucumber/cucumber');
const plwt = require('@playwright/test');

Before(async function () {

    const browser = await plwt.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();

});

After(async function () {
    console.log("Test execution done")
});