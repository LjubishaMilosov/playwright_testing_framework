import { BasePage } from '../../basePage';

export default class mainNavigationComponent extends BasePage {
  

  async navigateToRegistrationPage() {
    await this.goto();
  }

}