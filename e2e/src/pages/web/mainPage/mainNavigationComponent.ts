import { BasePage } from '../../basePage';

export default class mainNavigationComponent extends BasePage {
  

  async navigateToMainPage() {
    await this.goto();
  }

}