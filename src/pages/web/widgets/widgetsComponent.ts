import { ICustomWorld } from "../../world";
import { BasePage } from "../../basePage";
import {getRandomIndexNotFirst, scrollToTop} from '../../../support/utils/utilityFunctions';

export default class WidgetsComponent extends BasePage {
  private readonly widgetsComponentElements = {

  highlightsWidgetId: `#widget-V1K5J6C3Y4J5A2A1O8P6348 .bto-sb-element`,
  upcomingWidgetId: `#widget-L1Q6M7Z8W8C8Y4H0X1B6011 .bto-sb-element`,
  liveWidgetId: `#widget-W1J5R5Z0G5A6D4L9L4B0172 .bto-sb-element`,
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

async getWidgetUpcoming() {
  return this.page.waitForSelector(this.widgetsComponentElements.upcomingWidgetId);
  }

  async getWidgetLive() {
    return this.page.waitForSelector(this.widgetsComponentElements.liveWidgetId);
  }

}