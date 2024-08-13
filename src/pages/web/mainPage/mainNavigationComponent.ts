import { BasePage } from '../../basePage';

export default class mainNavigationComponent extends BasePage {
  private readonly mainNavigationElements = {
    sports: `#menu-item-1158`,
  };
  

  async navigateToMainPage() {
    await this.goto();
  }

  async navigateToSports() {
    await this.page.click(this.mainNavigationElements.sports);
  }

  async navigateToRegistrationPage() {
    await this.goto('/register');
  }
  

};