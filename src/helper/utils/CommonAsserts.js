import { expect } from '@playwright/test';

class CommonAsserts {
    constructor(page) {
        this.page = page;
    }

    async verifyPageTitle(expectedTitle) {
        const title = await this.page.title()
        expect(await title.includes(expectedTitle)).toBeTruthy();
    }

    async verifyPageUrl(expectedUrl) {
        const url = await this.page.url();
        expect(await url.includes(expectedUrl)).toBeTruthy();
    }

    async verifyPageHasLogo() {
        await expect(await this.page.getByAltText('Home - Translink - logo')).toBeVisible();
    }




}

export { CommonAsserts };