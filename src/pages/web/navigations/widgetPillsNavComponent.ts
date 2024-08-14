import { getTextContent } from "../../../support/utils/utilityFunctions";
import { BasePage } from "../../basePage";
import { ICustomWorld } from "../../world";

export default class WidgetPillsNavComponent extends BasePage {
  private readonly widgetPillsNavElements = {
    navBar: `.bto-sb-widget.bto-sb-widget-category-nav .bto-sb-widget-content`,
    widgetTitle:`div.bto-sb-widget-title.bto-sb-widget-nav-icon > h3`
  }

  async getNavBar() {
    return await this.page.waitForSelector(this.widgetPillsNavElements.navBar);
  };

  async getWidgetTitle(ICustomWorld: ICustomWorld) {
    return getTextContent.call(ICustomWorld, this.widgetPillsNavElements.widgetTitle);
  }
  

}