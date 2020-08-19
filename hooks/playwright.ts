import { BeforeAll, AfterAll, Before, After } from "cucumber";
import * as Playwright from "playwright";
import { Browser, BrowserContext, Page } from "playwright";

let browser: Browser
let context: BrowserContext
let page: Page

// Create a global browser for the test session.
BeforeAll(async () => {
  if (process.env.GITHUB_ACTIONS) {
    browser = await Playwright.chromium.launch();
  } else {
    browser = await Playwright.chromium.launch({ headless: false });
  }
});
AfterAll(async () => {
  await browser.close();
});

// Create a fresh browser context for each test.
Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
});
After(async () => {
  await page.close();
  await context.close();
});

export {browser, context, page}