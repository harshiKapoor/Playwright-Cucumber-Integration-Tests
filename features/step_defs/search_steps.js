const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { PageManager } = require('../pages/PageManager');

let pageManager;

Given('User is on journey planner page', async function () {
    pageManager = new PageManager(this.page);
    await pageManager.searchPage.goTo();
    await pageManager.searchPage.verifyPageTitle();
});


When('User fills in {string} as start location', async function (startLocation) {
    await pageManager.searchPage.fillInStartLocation(startLocation);
});


When('User fills in {string} as end loction', async function (endLocation) {
    await pageManager.searchPage.fillInEndLocation(endLocation);
});



When('User selects the {string} as date to travel', async function (travelDate) {
    await pageManager.searchPage.selectTravelDate(travelDate);
});



When('User selects the {string} time to travel', async function (travelTime) {
    await pageManager.searchPage.selectTravelTime(travelTime);
});



When('User clicks on Find Journey', async function () {
    await pageManager.searchPage.clickFindJourneys();
});



Then('All valid journeys are displayed', async function () {
    await pageManager.searchPage.verifyValidJourneys();

});
