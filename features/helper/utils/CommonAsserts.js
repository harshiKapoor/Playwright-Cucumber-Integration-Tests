import { expect } from '@playwright/test';

class CommonAsserts {
    constructor(page) {
        this.page = page;
    }

    async verifyPageTitle(title) {
        const searchPageTitle = await this.page.title();
        expect(await searchPageTitle.includes(title)).toBeTruthy();
    }


}

export { CommonAsserts };