import { ICustomWorld } from "../../world";
import { BasePage } from "../../basePage";
import {getRandomIndexNotFirst, scrollToTop} from '../../../support/utils/utilityFunctions';

export default class WidgetsComponent extends BasePage {
  private readonly widgetsComponentElements = {

  highlightsWidgetId: `#widget-V1K5J6C3Y4J5A2A1O8P6348 .bto-sb-element`,
  events: `.bto-sb-event-name`,
  marketNamesLabel: `.bto-sb-event-marketlabel`,
  odds: `.bto-sb-event-odd`,
  };

  async getWidgetHighlights() {
    return this.page.waitForSelector(this.widgetsComponentElements.highlightsWidgetId);
  }

  async fewEventsAreDisplayed() {
    await this.page.waitForSelector(this.widgetsComponentElements.events);
    const events = await this.page.$$(this.widgetsComponentElements.events);
    return events.length > 3;
  }

  getMarketNames() {
    return this.page.waitForSelector(this.widgetsComponentElements.marketNamesLabel);
  }

  getOdds() {
    return this.page.waitForSelector(this.widgetsComponentElements.odds);
  }

  async clickRandomEventAndGetText(iCustomWorld: ICustomWorld) {
      await this.page.waitForSelector(this.widgetsComponentElements.events);
      const events = await this.page.$$(this.widgetsComponentElements.events);
      const randomIndex = getRandomIndexNotFirst(events.length);
      const selectedEvent = events[randomIndex];
      const linksText = await selectedEvent.textContent();
      iCustomWorld.modifiedText = linksText;
      await selectedEvent.click();
      await scrollToTop.call(iCustomWorld);
  }

}