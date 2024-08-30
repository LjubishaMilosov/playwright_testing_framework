import { BasePage } from "../../basePage";
import { ICustomWorld } from "../../world";
//import { ICustomWorld } from "../../world";
//import { getRandomIndex } from "../../../support/utils/utilityFunctions";

export default class AllSPortsComponentMobile extends BasePage {
  private readonly allSportsMobileElements = {
    allSports: '.bto-sb-mb-sports-icon.all-sports',
    sportNameLocator: (sportName: string) => `//span[text()='${sportName}']`, 
    sportNameLocatorScrollable: (sportName: string) => `//a[text()=' ${sportName} ']`,
  }


  async clickOnAllSports () {
    await this.page.waitForSelector(this.allSportsMobileElements.allSports);
    await this.page.click(this.allSportsMobileElements.allSports);
  }

  async clickOnSelectedSport(ICustomWorld: ICustomWorld, sportName: string) {
      const sport = await this.page.waitForSelector(this.allSportsMobileElements.sportNameLocator(sportName));
      const sportText = await sport.textContent();
      ICustomWorld.modifiedText = sportText;
      await this.page.click(this.allSportsMobileElements.sportNameLocator(sportName));

  }

  async clickSportFromScollableMenu (ICustomWorld:ICustomWorld, sportName:string) {
    const sport = await this.page.waitForSelector(this.allSportsMobileElements.sportNameLocatorScrollable(sportName));
    const sportText = await sport.textContent();
    ICustomWorld.modifiedText = sportText;
    await this.page.click(this.allSportsMobileElements.sportNameLocatorScrollable(sportName));
  }
  
}