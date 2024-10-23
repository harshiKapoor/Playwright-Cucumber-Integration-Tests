import { chromium, firefox, webkit } from "@playwright/test";

const options = {
    headless: false,
    timeout: 30000,
    viewport: { width: 1280, height: 720 }
}

class BrowserManager {

    async invokeBrowser() {
        const browserType = process.env.BROWSER

        switch (browserType) {
            case "chrome":
                return await chromium.launch({ options })
                break;
            case "firefox":
                return await firefox.launch({ options })
                break;
            case "webkit":
                return await webkit.launch({ options })
                break;
            default:
                return await chromium.launch({ options })
                break;
        }
    }
}


export { BrowserManager };