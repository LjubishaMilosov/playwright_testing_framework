import { BasePage } from "../../basePage";


export default class WidgetsMainNavigationComponent extends BasePage {
    private readonly widgetsMainNavigationElements = {
      highlightsButton: `a[href='#/highlights']`,
      liveButton:`.bto-sb-scrolling-menu a[href='#/']`,
      upcomingButton: `a[href='#/upcoming']`,

    }

  async clickOnHighlightsButton() {
    await this.page.waitForSelector(this.widgetsMainNavigationElements.highlightsButton);
    await this.page.click(this.widgetsMainNavigationElements.highlightsButton);
  }
  async clickOnLiveButton() {
    await this.page.waitForSelector(this.widgetsMainNavigationElements.liveButton);
    await this.page.click(this.widgetsMainNavigationElements.liveButton);
  }

  async clickOnUpcomingButton() {
    await this.page.waitForSelector(this.widgetsMainNavigationElements.upcomingButton);
    await this.page.click(this.widgetsMainNavigationElements.upcomingButton);
  }


}

