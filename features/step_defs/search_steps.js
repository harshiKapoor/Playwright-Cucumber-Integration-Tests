const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { time } = require('console');


Given('User is on journey planner page', async function () {
    await this.page.goto("https://jp.translink.com.au/plan-your-journey/journey-planner");
    const searchPageTitle = await this.page.title();
    expect(searchPageTitle.includes('Plan your journey')).toBeTruthy();
});


When('User fills in start location', async function () {
    await this.page.getByPlaceholder('Enter a start location', { name: 'startLocation' }).pressSequentially("springfield");
    const dropdown = this.page.locator("ul#StartResults");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("li").count();
    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator("li").nth(i).textContent();
        if (text === "Springfield Central station") {
            await dropdown.locator("li").nth(i).click();
            break;
        }
    }

});


When('User fills in end loction', async function () {
    await this.page.getByPlaceholder('Enter an end location').pressSequentially("Indro");
    const dropdown = this.page.locator("ul#EndResults");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("li").count();
    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator("li").nth(i).textContent();
        if (text === "Indooroopilly QLD") {
            await dropdown.locator("li").nth(i).click();
            break;
        }
    }
});



When('User selects the date to travel', async function () {

    const dateSelector = this.page.locator("[name='searchDate']")
    await dateSelector.selectOption("Today (Sunday)");
});



When('User selects the time to travel', async function () {
    const timeSelector = this.page.locator("#searchTime");
    await timeSelector.selectOption("5:00pm");
});



When('User clicks on Find Journey', async function () {
    await this.page.locator("#plan-journey-btn").click();
});



Then('All valid journeys are displayed', async function () {
    await this.page.locator('#travel-options').waitFor();
    await expect(this.page.locator('#travel-options')).toBeVisible();

});
