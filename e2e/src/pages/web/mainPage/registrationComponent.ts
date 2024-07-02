import { BasePage } from "../../basePage";


export default class RegistrationComponent extends BasePage{

  private readonly registrationElements = {
    
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
    //userDropDown: '#btoPlayerMenuMob',
    //personalInfoOption: `#btoPlayerMenuMob [href='https://qa.btobet.net/player-portal/#personal']`
   
  }


  async fillInFirstName(user:string) {
    await this.page.locator(this.registrationElements.firstnameInput).fill(user);
  }

  async fillInLastName(user:string) {
    await this.page.locator(this.registrationElements.lastnameInput).fill(user);
  }

  async fillInUsername(username:string) {
    await this.page.locator(this.registrationElements.usernameInput).fill(username);
  }

  async fillInEmail(email:string) {
    await this.page.locator(this.registrationElements.emailInput).fill(email);
  }

  async fillInPhoneNumber(phoneNum:string) {
    await this.page.locator(this.registrationElements.phoneNumberInput).fill(phoneNum);
  }
  
  async fillInPassword(password:string) {
    await this.page.locator(this.registrationElements.passwordInput).fill(password);
  }

  async fillInConfirmPassword(password:string) {
    await this.page.locator(this.registrationElements.confirmPasswordInput).fill(password);
  }
  
  async fillInPromoCode(code:string) {
    await this.page.locator(this.registrationElements.promoCodeInput).fill(code);
  }
  
  async checkTermsAndConditionsCheckbox() {
    await this.page.locator(this.registrationElements.termsAnConditionsCheckbox).click();
  }
  
  async clickRegisterButton() {
    await this.page.locator(this.registrationElements.registerButton).click();
  }

  getLoggedUser() {
    return this.page.waitForSelector(this.registrationElements.userLogged);
  }

  // async openDropdown() {
  //   await this.page.locator(this.registrationElements.userDropDown).click();
  // }

  // async selectPersonalInfo() {
  //   await this.page.locator(this.registrationElements.userDropDown).click();
  // }
//personalInfoOption
  // async waitForText(){
  //   await this.page.locator(this.registrationElements.welcomeText).waitFor();
  // }

};