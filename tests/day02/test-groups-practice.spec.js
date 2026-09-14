import { test } from "@playwright/test";

test.describe ("Practice.cydeo", () => {

test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/")
});

test.afterEach (async  ({page}) => {
    await page.waitForTimeout(3000);
});

test("Title of page", async ({ page }) => {
    console.log( await page.title());
    
});

test("URL of page", async ({ page }) => {
    console.log (await page.url ());
    
});



});