import { BasePage } from "../../basePage";
import { ICustomWorld } from "../../world";
import {getRandomIndexNotFirst} from "../../../support/utils/utilityFunctions";
export default class LeaguePageMobile extends BasePage {
    private readonly categoryMobileElements = {
        categories: `//div[@class='bto-sb-mb-category-menu']/ul/li`,
        events: `.bto-sb-mb-event-item`
    };

    async getRandomIndexForCategories(ICustomWorld: ICustomWorld) {
      await this.page.waitForSelector(this.categoryMobileElements.categories);
      const items = await this.page.$$(this.categoryMobileElements.categories);
      const randomIndex = getRandomIndexNotFirst(items.length);
      ICustomWorld.indexForRandomEvent = ICustomWorld.indexForRandomEvent || [];
      ICustomWorld.indexForRandomEvent.push(randomIndex);
    }


    async clickOnRandomCategory(ICustomWorld: ICustomWorld) {
        // const selector = `${this.categoryMobileElements.categories}[${ICustomWorld.indexForRandomEvent}]`
        // console.log(selector);
      (
        await this.page.waitForSelector(`${this.categoryMobileElements.categories}[${ICustomWorld.indexForRandomEvent}]`)
      ).click();
    }

     getListOfSelectedTournaments(ICustomWorld: ICustomWorld) {
      return this.page.waitForSelector(`${this.categoryMobileElements.categories}[${ICustomWorld.indexForRandomEvent}]/ul/li`);
      
    }

    async clickOnRandomTournament(ICustomWorld:ICustomWorld) {
      const listOfSelectedTournaments = await this.page.$$
      (
        `${this.categoryMobileElements.categories}[${ICustomWorld.indexForRandomEvent}]/ul/li`
      );
      const randomIndex = getRandomIndexNotFirst(listOfSelectedTournaments.length);
      const tournament = await this.page.waitForSelector(
        `${this.categoryMobileElements.categories}[${ICustomWorld.indexForRandomEvent}]/ul/li[${randomIndex}]`
      );
      
      await tournament.click();
}

getListOfSelectedEvents() {
  return this.page.waitForSelector(this.categoryMobileElements.events);
  
}

   
}