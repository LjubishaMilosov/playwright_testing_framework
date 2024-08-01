import { generateRandomNumber, generateRandomString } from "../../../support/utils/utilityFunctions";
import { BasePage } from "../../basePage";
import { ICustomWorld } from "../../world";

const randomUsername = generateRandomString(4) + generateRandomNumber(5);
export default class RegistrationComponent extends BasePage{

  private readonly registerElements = {
    
    firstnameInput: `[name='FirstName']`,
    lastnameInput: `[name='LastName']`,
    usernameInput: `[name='Username']`,
    emailInput: `[name='Email']`,
    phoneNumberInput: `[name='PhoneNumber']`,
    passwordInput: `[name='Password']`,
    confirmPasswordInput: `[name='ConfirmPassword']`,
    promoCodeInput: `#marketingCode`,
    termsAnConditionsCheckbox: `.bto-checkbox-inline`,
    registerButton: `.bto-btn-register`,
    userLogged: `[class='bto-user-logged']`,
    userIcon: `bto-icon-user`,
    sportbookTab: `#menu-item-1158 > a`,

    loginusernameInput: `[class='form-control input-sm bto-form-control-username btosystem-enter']`,
    loginPasswordInput: `[class='form-control input-sm bto-form-control-password btosystem-enter show-content']`,
    
  }

  
  async enterFirstname(iCustomWorld: ICustomWorld){
    const randomFirstname = generateRandomString(9);
    await this.page.locator(this.registerElements.firstnameInput).fill(randomFirstname);
    iCustomWorld.firstname = randomFirstname;
  }

  async enterLastName(iCustomWorld: ICustomWorld) {
    const randomLastname = generateRandomString(8);
    await this.page.locator(this.registerElements.lastnameInput).fill(randomLastname);
    iCustomWorld.lastname = randomLastname;
  }

  async enterUsername(iCustomWorld: ICustomWorld) {
    await this.page.locator(this.registerElements.usernameInput).fill(randomUsername);
    iCustomWorld.username = randomUsername;
    
  }

  async enterEmail(iCustomWorld: ICustomWorld) {
    const randomEmail = generateRandomString(4) + generateRandomNumber(5) + '@test.com';
    await this.page.locator(this.registerElements.emailInput).fill(randomEmail)
    iCustomWorld.email = randomEmail;
  }

  async enterPhoneNumber(iCustomWorld: ICustomWorld) {
    const randomPhoneNumber = '234' + generateRandomNumber(9);
    await this.page.locator(this.registerElements.phoneNumberInput).fill(randomPhoneNumber)
    iCustomWorld.phone = randomPhoneNumber;
  }
  
  async enterPassword() {
    const randomPassword = 'B2Btests@';
    await this.page.locator(this.registerElements.passwordInput).fill(randomPassword)
  }

  async enterConfirmPassword() {
    const randomPassword = 'B2Btests@';
    await this.page.locator(this.registerElements.confirmPasswordInput).fill(randomPassword)
  }
  async enterPromoCode() {
    const randomPromoCode = generateRandomString(4);
    await this.page.locator(this.registerElements.promoCodeInput).fill(randomPromoCode)
  }
  
  async clickTermsAndConditionsCheckbox() {
    await this.page.locator(this.registerElements.termsAnConditionsCheckbox).click();
  }
  
  async clickRegisterButton() {
    await this.page.locator(this.registerElements.registerButton).click();
  }

  //this function returns 'undefined', therefore cannot be used to assert tha the url has changed
  async waitUrlToChange() {
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForURL('https://qa.btobet.net/thank-you/');
  }

  async waitUrlToChangeHome() {
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForURL('https://qa.btobet.net/');
  }

async enterLoginUsername(iCustomWorld: ICustomWorld) {
  await this.page.locator(this.registerElements.loginusernameInput).fill(randomUsername);
  iCustomWorld.username = randomUsername;
  console.log(`random username: ${randomUsername}`);
  
}

async enterLoginPassword() {
  const randomPassword = 'B2Btests@';
  await this.page.locator(this.registerElements.loginPasswordInput).fill(randomPassword);
}

  // getLoggedUser() {
  //   return this.page.waitForSelector(this.registerElements.userLogged);
  // }

  async clickOnSportbookTab() {
    await this.page.click(this.registerElements.sportbookTab);
  
  }

};