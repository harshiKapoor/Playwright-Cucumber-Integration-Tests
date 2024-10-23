import { Given, When, Then } from "@cucumber/cucumber";
import { expect, request } from "@playwright/test";

let response;
let apiContext;

When('call to service updates is done', async function () {
    apiContext = await request.newContext();
    response = await apiContext.get("https://translink.com.au/service-updates/about-service-updates");

})

Then('status ok is returned', async function () {
    expect(await response.ok()).toBeTruthy();
    expect(await response.statusText() === "OK").toBeTruthy();
});

Then('response is not empty', async function () {
    expect((await response).toBeEmpty).toBeFalsy();
});




