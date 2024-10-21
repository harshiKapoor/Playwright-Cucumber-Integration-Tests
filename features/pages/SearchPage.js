import { expect } from "@playwright/test";

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
        await this.page.goto(process.env.BASEURL);
    }

    async verifyPageTitle() {
        const searchPageTitle = await this.page.title();
        expect(searchPageTitle.includes('Plan your journey')).toBeTruthy();
    }

    async fillInStartLocation(startLocation) {
        await this.startLocation.pressSequentially(startLocation);
        const dropdown = this.page.locator("ul#StartResults");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("li").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await dropdown.locator("li").nth(i).textContent();
            if (text === startLocation) {
                await dropdown.locator("li").nth(i).click();
                break;
            }
        }
    }

    async fillInEndLocation(endLocation) {
        await this.endLocation.pressSequentially(endLocation);
        const dropdown = this.page.locator("ul#EndResults");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("li").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await dropdown.locator("li").nth(i).textContent();
            if (text === endLocation) {
                await dropdown.locator("li").nth(i).click();
                break;
            }
        }
    }

    async selectTravelDate(travelDate) {
        await this.dateSelector.selectOption(travelDate);
    }

    async selectTravelTime(travelTime) {
        await this.timeSelector.selectOption(travelTime);
    }

    async clickFindJourneys() {
        await this.findJourneyButton.click();
    }

    async verifyValidJourneys() {
        await expect(this.travelOptions).toBeVisible();
        await this.travelOptions.waitFor();
    }
}

export { SearchPage };