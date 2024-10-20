const { SearchPage } = require('../pages/SearchPage');

class PageManager {

    constructor(page) {
        this.page = page;
        this.searchPage = new SearchPage(this.page);
    }

    async getSearchPage() {
        return this.searchPage;
    }
}

module.exports = { PageManager };