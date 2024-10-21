import { After, Before, BeforeAll } from "@cucumber/cucumber";
import { EnvManager } from '../helper/env/EnvManager.js';
import { BrowserManager } from "../helper/browsers/BrowserManager.js";
import { createLogger } from "winston";
import { options } from "../../features/utils/logger.js";


let browser;
let context;
let browserManager = new BrowserManager()
let envManager = new EnvManager()


BeforeAll(async function () {
    envManager.getEnv();
    browser = await browserManager.invokeBrowser();
});

Before(async function () {
    context = await browser.newContext();
    this.page = await context.newPage();
    this.logger = createLogger(options("search"));
});

After(async function () {
    this.logger.info("Test execution done")
});