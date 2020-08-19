import { Given, When, Then } from "cucumber"
import * as assert from "assert"
import { page } from "../hooks/playwright";

Given("Home page", async () => {
  await page.goto("https://www.rurubu.travel")
});

When("I click on {word}", async (element) => {
  await page.click(`[data-selenium='${element}']`)
  await page.waitForLoadState()
});

Then("I should be on page", async () => {
  assert.equal(page.url(), "https://www.rurubu.travel/deals")
});