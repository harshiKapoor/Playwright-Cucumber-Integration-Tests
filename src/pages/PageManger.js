// All pages would get added to pageManager, this means step files would only need to import one PageManager.js , instead of
// importing individual pages .

// Looking at how big this project can turn out to be , with so many pages , having just one import 
// would be really handy.

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

