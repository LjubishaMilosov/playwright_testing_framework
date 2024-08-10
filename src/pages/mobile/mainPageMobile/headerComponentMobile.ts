import { BasePage } from "../../basePage";

export default class HeaderComponentMobile extends BasePage{
  private readonly headerElements = {
    loginButtonMobile:`[class='btn btn-sm btn-default btn-user-success btosystem-showlogin-btn']`,
  };

async clickLoginButtonMobile() {
  await this.page.waitForSelector(this.headerElements.loginButtonMobile);
  await this.page.click(this.headerElements.loginButtonMobile);
}

}