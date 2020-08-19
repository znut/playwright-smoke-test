import * as playwright from "playwright";
import { Browser } from "playwright";


(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser: Browser = await playwright[browserType].launch({ headless: false });
    const page = await browser.newPage({
      viewport: {
        width: 1920,
        height: 1080,
      }
    });
    await page.goto('https://www.rurubu.travel/');
    await page.waitForLoadState()

    // await page.fill(".SearchBoxTextEditor", "札幌")
    // await page.click("[data-selenium=autosuggest-item]")
    // await page.click("[data-selenium=backdrop]")
    // await page.click("[data-selenium=searchButton]")
    await page.click("[data-area='01']")
    await page.click("a[data-region-id='0101']")
    await page.waitForLoadState()

    await page.screenshot({ path: `artifacts/example-${browserType}.png` });
    await browser.close();
  }
})();