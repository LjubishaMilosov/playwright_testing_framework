import { BasePage } from '../../basePage';
import { getTextContent } from '../../../support/utils/utilityFunctions';
import { ICustomWorld } from '../../world';

export default class MatchDetailsComponent extends BasePage {
  private readonly matchDetailsElements = {
    headerHomeTeamName: `div[class='bto-sb-mb-team bto-sb-mb-team-home'] span[class='bto-sb-mb-team-name']`,
    headerAwayTeamName: `div[class='bto-sb-mb-team bto-sb-mb-team-away'] span[class='bto-sb-mb-team-name']`,
    eventNameHomeTeam: `.bto-sb-event-team .bto-sb-event-home`,
    eventNameAwayTeam: `.bto-sb-event-team .bto-sb-event-away`,
    marketNames:  `.bto-sb-event-marketlabel`,
    

  }

async getHeaderHomeTeamName(iCustomWorld:ICustomWorld) {
  return getTextContent.call(iCustomWorld, this.matchDetailsElements.headerHomeTeamName);
  }

  async getHeaderAwayTeamName(iCustomWorld:ICustomWorld) {
    return getTextContent.call(iCustomWorld, this.matchDetailsElements.headerAwayTeamName);
  }

  async getEventNameForHometeam(iCustomWorld:ICustomWorld) {
    return getTextContent.call(iCustomWorld, this.matchDetailsElements.eventNameHomeTeam);
  }
  async getEventNameForAwayTeam(iCustomWorld:ICustomWorld) {
    return getTextContent.call(iCustomWorld, this.matchDetailsElements.eventNameAwayTeam);
  }

  async getOutcomeName() {
    return this.page.waitForSelector(this.matchDetailsElements.marketNames);
  }
  

}