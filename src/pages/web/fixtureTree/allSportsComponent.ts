import { getRandomIndex } from "../../../support/utils/utilityFunctions";
import { BasePage } from "../../basePage"

export default class AllSportsComponent extends BasePage {
  private readonly fixtureTreeAllSports = {
    allSports:`.bto-sb-sportlist-menu-sport-name`,
    allTournaments: `span[class="bto-sb-sportlist-menu-item"]`,

  }

  async clickOnRandomSport() {
    await this.page.waitForSelector(this.fixtureTreeAllSports.allSports);
    const sportsItems = await this.page.$$(this.fixtureTreeAllSports.allSports);
    const randomIndex = getRandomIndex(sportsItems.length);
    const selectedSport = sportsItems[randomIndex];
    await selectedSport.click();
  }

  async getTournaments() {
    await this.page.waitForSelector(this.fixtureTreeAllSports.allTournaments);
    const tournamentItems = await this.page.$$(this.fixtureTreeAllSports.allTournaments);
    return tournamentItems;
  }

}