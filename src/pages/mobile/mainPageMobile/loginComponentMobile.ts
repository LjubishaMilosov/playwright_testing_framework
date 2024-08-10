import { BasePage } from "../../basePage";

export default class LoginComponentMobile extends BasePage {

  private readonly loginMobileElements = {
    // usernameMobileInput: `[class='form-control btosystem-enter']`,
    // passwordMobileInput: `[class='form-control btosystem-enter show-content']`,
    // usernameMobileInput: `[id='btoLoginFormbd3ed7f552e3ace1f727235cc02d9961'] [class='form-control btosystem-enter']`,
    // passwordMobileInput: `#btoLoginFormbd3ed7f552e3ace1f727235cc02d9961 [class='form-control btosystem-enter show-content']`,
    usernameMobileInput: `[placeholder='234******']`,
    //loginButtonMobile: `[class='btn btn-default btn-user-confirm btn-block btosystem-login-btn']`,
    invalidLoginDetailsClickOK: `[class='swal-button swal-button--confirm']`,
    invalidLoginDetailClickCancel: `[class='swal-button swal-button--cancel']`,
  }



  async enterUsernameMobile(user: string) {
    await this.page.locator(this.loginMobileElements.usernameMobileInput).fill(user);

  }

  async enterPasswordMobile(password: string) {
    await this.page.getByLabel('Password').fill(password);
  }

}