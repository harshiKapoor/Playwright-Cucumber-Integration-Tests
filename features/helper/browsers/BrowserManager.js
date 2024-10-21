import { chromium, firefox, webkit } from "@playwright/test";

class BrowserManager {

    async invokeBrowser() {
        const browserType = process.env.BROWSER
        switch (browserType) {
            case "chrome":
                return await chromium.launch({ headless: false })
                break;
            case "firefox":
                return await firefox.launch({ headless: false })
                break;
            case "webkit":
                return await webkit.launch({ headless: false })
                break;
            default:
                return await chromium.launch({ headless: false })
                break;
        }
    }
}


export { BrowserManager };