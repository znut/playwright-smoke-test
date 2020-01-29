import playwright from "playwright";

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext({
      viewport: {
        width: 1920,
        height: 1080,
      }
    });
    const page = await context.newPage('https://new.rurubu.travel/');
    await page.waitForLoadState({
      waitUntil: "networkidle2",
    })

    await page.fill(".SearchBoxTextEditor", "沖縄")
    await page.click("button.Searchbox__searchButton")
    await page.waitForLoadState({
      waitUntil: "networkidle2",
    })

    await page.screenshot({ path: `artifacts/example-${browserType}.png` });
    await browser.close();
  }
})();