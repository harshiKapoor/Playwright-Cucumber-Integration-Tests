import { SearchPage } from "../pages/SearchPage.js";

class PageManager {

    constructor(page) {
        this.page = page;
        this.searchPage = new SearchPage(this.page);
    }

    async getSearchPage() {
        return this.searchPage;
    }
}

// module.exports = { PageManager };
export { PageManager };