import { Given, When, Then } from "@cucumber/cucumber";
import { PageManager } from "../../../src/pages/PageManger.js";
import { CommonAsserts } from "../../../src/helper/utils/CommonAsserts.js";

let pageManager;
let commonAsserts;
let searchPage;


Given('User is on journey planner page', async function () {
    pageManager = new PageManager(this.page);
    commonAsserts = new CommonAsserts(this.page);
    searchPage = await pageManager.getSearchPage();
    await searchPage.goTo();
    this.logger.info("navigating to search page");
    commonAsserts.verifyPageTitle("Plan your journey | Translink");
});

When('User provides {string} as start location', async function (departingStation) {
    await searchPage.enterStartLocation(departingStation);
});

When('User provides an {string} as end location', async function (arrivingStation) {
    await searchPage.enterEndLocation(arrivingStation);
});

When('User provides a {string} to search for journeys', async function (travelDate) {
    await searchPage.selectTravelDate(travelDate)
});

When('User confirms LeaveAfter time search mode is selected', async function () {
    await searchPage.confirmLeaveAfterIsSelected()
});

When('User provides a preferred {string}', async function (travelTime) {
    await searchPage.selectTravelTime(travelTime)
});

When('User clicks to find journeys', async function () {
    await searchPage.clickFindJourneys();
});

Then('Journeys are displayed', async function () {
    await searchPage.verifyTravelOptionsAreDisplayed();
});

Then('Travel options returned have startTime later than {string} provided by user', async function (userPreferredStartTime) {
    await searchPage.verifyTravelOptionDepartureTime(userPreferredStartTime);
    this.logger.info("Finding journeys for your search...");
});

