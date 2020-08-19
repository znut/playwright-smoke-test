import { setWorldConstructor } from "cucumber"
import * as Playwright from "playwright"

class CustomWorld {
  private browser: Playwright.Browser;
  private variable: number

  constructor() {
    this.variable = 0;
    // this.browser = await Playwright.chromium.launch()
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);