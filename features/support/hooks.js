import { After, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { EnvManager } from '../../src/helper/env/EnvManager.js';
import { BrowserManager } from "../../src/helper/browsers/BrowserManager.js";
import { createLogger } from "winston";
import { options } from "../../src/helper/utils/logger.js";

setDefaultTimeout(60 * 1000);

let browser;
let context;
let browserManager = new BrowserManager();
let envManager = new EnvManager();

BeforeAll(async function () {
    envManager.getEnv();
    browser = await browserManager.invokeBrowser();
});

Before(async function ({ pickle }) {
    const scenarioName = pickle.name;
    context = await browser.newContext();
    this.page = await context.newPage();
    this.logger = createLogger(options(scenarioName));
    this.logger.info(`Running tests in ${process.env.ENV}`);
});

After(async function () {
    this.logger.info("Test execution done")
});