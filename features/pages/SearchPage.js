const { expect } = require('@playwright/test');

class SearchPage {
    constructor(page) {
        this.page = page;
        this.dateSelector = page.locator("[name='searchDate']");
        this.timeSelector = page.locator("#searchTime");
        this.findJourneyButton = page.locator("#plan-journey-btn");
        this.travelOptions = page.locator('#travel-options');
        this.endLocation = page.getByPlaceholder('Enter an end location');
        this.endLocationDropDown = page.locator("ul#EndResults");
        this.startLocation = page.getByPlaceholder('Enter a start location', { name: 'startLocation' });
        this.startLocationDropDown = page.locator("ul#StartResults");

    }

    async goTo() {
        await this.page.goto("https://jp.translink.com.au/plan-your-journey/journey-planner");
    }

    async verifyPageTitle() {
        const searchPageTitle = await this.page.title();
        expect(searchPageTitle.includes('Plan your journey')).toBeTruthy();
    }

    async fillInStartLocation() {
        await this.startLocation.pressSequentially("springfield");
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
    }

    async fillInEndLocation() {
        await this.endLocation.pressSequentially("Indro");
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
    }

    async selectTravelDate() {
        await this.dateSelector.selectOption("Tue, 22 Oct");
    }

    async selectTravelTime() {

        await this.timeSelector.selectOption("5:00pm");
    }

    async clickFindJourneys() {
        await this.findJourneyButton.click();
    }

    async verifyValidJourneys() {

        await expect(this.travelOptions).toBeVisible();
        await this.travelOptions.waitFor();
    }

}

module.exports = { SearchPage };