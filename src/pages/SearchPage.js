import { expect } from "@playwright/test";
import { createDate, compareDate } from "../helper/utils/DateHelper.js";

class SearchPage {
    constructor(page) {
        this.page = page;
        this.dateSelector = page.getByLabel('Date')
        this.timeSelector = page.getByLabel('Select a travel time from the drop down');
        this.findJourneyButton = page.locator("#plan-journey-btn");
        this.travelOptions = page.locator('#travel-options');
        this.endLocation = page.getByPlaceholder('Enter an end location', { name: 'endLocation' });
        this.endLocationDropDown = page.locator("#EndResults");
        this.startLocation = page.getByPlaceholder('Enter a start location', { name: 'startLocation' });
        this.startLocationDropDown = page.locator("#StartResults");
        this.travelOptionDepartureTime = page.locator("#travel-option-title-content >> li").first();
        this.travelOptionArrivalTime = page.locator("#travel-option-title-content >> li").last();

    }

    async goTo() {
        await this.page.goto("https://jp.translink.com.au/plan-your-journey/journey-planner");
    }

    async enterStartLocation(startLocation) {
        await this.startLocation.pressSequentially(startLocation);
        await this.startLocationDropDown.waitFor();
        const optionsCount = await this.startLocationDropDown.locator("li").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await this.startLocationDropDown.locator("li").nth(i).textContent();
            if (text === startLocation) {
                await this.startLocationDropDown.locator("li").nth(i).click();
                break;
            }
        }
    }

    async enterEndLocation(endLocation) {
        await this.endLocation.pressSequentially(endLocation);
        await this.endLocationDropDown.waitFor();
        const optionsCount = await this.endLocationDropDown.locator("li").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await this.endLocationDropDown.locator("li").nth(i).textContent();
            if (text === endLocation) {
                await this.endLocationDropDown.locator("li").nth(i).click();
                break;
            }
        }
    }

    async selectTravelDate(travelDate) {
        const customDate = createDate(travelDate);
        await this.dateSelector.selectOption(customDate);
    }

    async selectTravelTime(travelTime) {
        await this.timeSelector.selectOption(travelTime);
    }

    async clickFindJourneys() {
        await this.findJourneyButton.click();
    }

    async verifyTravelOptionDepartureTime(userPreferredDepTime) {
        let actualDepTime = (await (this.travelOptionDepartureTime).first().textContent());
        actualDepTime = actualDepTime.split(" ")[1];  // removing 'Start' from returned 'Start 5:09pm
        expect(compareDate(actualDepTime, userPreferredDepTime)).toBeTruthy(); // 5:09pm  , 5:00pm
    }

    async verifyTravelOptionsAreDisplayed() {
        await expect(this.travelOptions).toBeVisible();
        await this.travelOptions.waitFor();
    }
}

export { SearchPage };