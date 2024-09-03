import { BasePage } from "../../basePage";

export default class WidgetsComponentMobile extends BasePage {

private readonly highlightsWidgetElementsMobile = {
  highlightsWidget:`bto-sb-mb-widget-highlights`,

}

async clickOnHighlightsButtonMobile(){
  await this.page.waitForSelector(this.highlightsWidgetElementsMobile.highlightsWidget);
  await this.page.click(this.highlightsWidgetElementsMobile.highlightsWidget);
}

}