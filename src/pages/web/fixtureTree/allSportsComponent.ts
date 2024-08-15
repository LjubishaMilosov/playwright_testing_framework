import { getRandomIndex } from "../../../support/utils/utilityFunctions";
import { BasePage } from "../../basePage"

export default class AllSportsComponent extends BasePage {
  private readonly fixtureTreeAllSportsElements = {
    allSports:`.bto-sb-sportlist-menu-sport-name`,
   
  }

  async clickOnRandomSport() {
    await this.page.waitForSelector(this.fixtureTreeAllSportsElements.allSports);
    const sportsItems = await this.page.$$(this.fixtureTreeAllSportsElements.allSports);
    const randomIndex = getRandomIndex(sportsItems.length);
    const selectedSport = sportsItems[randomIndex];
    await selectedSport.click();
  }

}