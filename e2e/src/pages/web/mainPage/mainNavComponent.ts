import { BasePage } from '../../basePage';

export default class MainNavComponent extends BasePage {
  

  async navigateToRegistrationPage() {
    await this.goto();
  }

}