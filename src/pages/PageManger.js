import { SearchPage } from "../pages/SearchPage.js"

class PageManager {

    constructor(page) {
        this.page = page;
        this.searchPage = new SearchPage(this.page);

    }

    getSearchPage() {
        return this.searchPage;
    }
}

export { PageManager };