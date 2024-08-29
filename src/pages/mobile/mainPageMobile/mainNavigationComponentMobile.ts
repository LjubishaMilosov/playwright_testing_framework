import { BasePage } from "../../basePage";

export default class MainNavigationComponentMobile extends BasePage {
  private readonly mainNavigationMobileElements = {
    sports: `#menu-item-76`,
    sbUSlayout : `#menu-item-547`,
  }

  async navigateToSportsMobile() {
    await this.page.click(this.mainNavigationMobileElements.sports);
  }

  async navigateToSportsUSlayoutMobile() {
    await this.page.click(this.mainNavigationMobileElements.sbUSlayout);
  }


}