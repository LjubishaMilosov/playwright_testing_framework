import { BasePage } from "../../basePage";

export default class LoginComponentMobile extends BasePage {

  private readonly loginMobileElements = {
    usernameMobileInput: `[placeholder='234******']`,
    passwordMobileInput: `#btoLoginForm071da86ea5fe74beeb789359722cb7fc [class="form-control btosystem-enter show-content"]`,
    loginButtonMobile: `[class='btn btn-default btn-user-confirm btn-block btosystem-login-btn']`,
    invalidLoginDetailsClickOK: `[class='swal-button swal-button--confirm']`,
    invalidLoginDetailClickCancel: `[class='swal-button swal-button--cancel']`,
    
  }



  async enterUsernameMobile(user: string) {
    //await this.page.locator(this.loginMobileElements.usernameMobileInput).fill(user);
    await this.page.getByPlaceholder('234******').fill(user);
  }

  async enterPasswordMobile(password: string) {
    await this.page.locator(this.loginMobileElements.passwordMobileInput).fill(password);
  }

  async clickLoginButtonMobile() {
    await this.page.click(this.loginMobileElements.loginButtonMobile);
  }
}