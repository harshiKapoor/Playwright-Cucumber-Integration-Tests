const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { PageManager } = require('../pages/PageManager');

let pageManager;

Given('User is on journey planner page', async function () {
    pageManager = new PageManager(this.page);
    await pageManager.searchPage.goTo();
    await pageManager.searchPage.verifyPageTitle();
});


When('User fills in start location', async function () {
    await pageManager.searchPage.fillInStartLocation();
});


When('User fills in end loction', async function () {
    await pageManager.searchPage.fillInEndLocation();
});



When('User selects the date to travel', async function () {
    await pageManager.searchPage.selectTravelDate();
});



When('User selects the time to travel', async function () {
    await pageManager.searchPage.selectTravelTime();
});



When('User clicks on Find Journey', async function () {
    await pageManager.searchPage.clickFindJourneys();
});



Then('All valid journeys are displayed', async function () {
    await pageManager.searchPage.verifyValidJourneys();

});
