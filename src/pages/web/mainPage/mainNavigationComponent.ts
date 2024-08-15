import { BasePage } from '../../basePage';

export default class mainNavigationComponent extends BasePage {
  private readonly mainNavigationElements = {
    sports: `#menu-item-1158`,
    sbUSlayout : `#menu-item-546`
  };
  

  async navigateToMainPage() {
    await this.goto();
  }

  async navigateToSports() {
    await this.page.click(this.mainNavigationElements.sports);
  }

  async navigateToSportsUSlayout() {
    await this.page.click(this.mainNavigationElements.sbUSlayout);
  }

  async navigateToRegistrationPage() {
    await this.goto('/register');
  }
  

};