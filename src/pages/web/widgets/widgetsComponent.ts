
import { BasePage } from "../../basePage";

export default class WidgetsComponent extends BasePage {
  private readonly widgetsComponentElements = {

  highlightsWidgetId: `#widget-V1K5J6C3Y4J5A2A1O8P6348 .bto-sb-element`,
  };

  async getWidgetHighlights() {
    return this.page.waitForSelector(this.widgetsComponentElements.highlightsWidgetId);
  }

}