import { BasePage } from "../../basePage";
import { ICustomWorld } from "../../world";
import { getRandomIndexNotFirst } from '../../../support/utils/utilityFunctions';

export default class QuickLinksComponent extends BasePage {
  private readonly fixtureTreeQuickLinks = {
    quickLinksItems: `.bto-sb-quick-links-item`,
  };
  
  async clickQuickLinksAndGetText(ICustomWorld:ICustomWorld){
    await this.page.waitForSelector(this.fixtureTreeQuickLinks.quickLinksItems);
    const quickLinksItems = await this.page.$$(this.fixtureTreeQuickLinks.quickLinksItems);
    const randomIndex = getRandomIndexNotFirst(quickLinksItems.length);
    const selectedSport = quickLinksItems[randomIndex];

    const quickLinksText = await selectedSport.textContent();
    console.log(quickLinksText);
    ICustomWorld.modifiedText = quickLinksText?.trim();

    await selectedSport.click();
  }
}