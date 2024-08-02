import { BasePage } from "../../basePage";


export default class PlayerMenuTabsComponent extends BasePage{

  private readonly personalInfoDropdownElements = {
    
    dropdownMenu: `.btn-group.personal button.dropdown-toggle`,
    personalInfoOption: `//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Personal Info']`,
  }


  private readonly personalInfoTabElements = {
    
    personalTab:`a[data-target="personal"]`,
    usernameText: `div[class="bto-player-name pull-left"] span[class="bto-username"]`,
    userFirstNameInputValue: `input[name="FirstName"]`,
    userLastNameInputValue: `input[name="LastName"]`,
    userEmailInputValue: `input[name="Email"]`,
    userPhoneInputValue: `input[name="PhoneNumber"]`,
  }

   async expandDropdown() {
    await this.page.waitForLoadState("networkidle")
    await this.page.click(this.personalInfoDropdownElements.dropdownMenu);
  }

  async selectPersonalInfo() {
    await this.page.waitForSelector(this.personalInfoDropdownElements.personalInfoOption);
    await this.page.click(this.personalInfoDropdownElements.personalInfoOption);
  }

  async getPersonalTabtext() {
    const personalTabText = (await this.page.waitForSelector(this.personalInfoTabElements.personalTab)).textContent();
    return personalTabText;
  }

  async getUserUsername() {
    const userUsername = (await this.page.waitForSelector(this.personalInfoTabElements.usernameText)).textContent();
    return userUsername;
  }

  async getUserFirstName() {
    const userFirstname = (await this.page.waitForSelector(this.personalInfoTabElements.userFirstNameInputValue)).getAttribute('value')

    return userFirstname;
  }

  async getUserLastName() {
    const userLastname = (await this.page.waitForSelector(this.personalInfoTabElements.userLastNameInputValue)).getAttribute('value');
    return userLastname;
  }

  async getUserEmail() {
    const userEmail = (await this.page.waitForSelector(this.personalInfoTabElements.userEmailInputValue)).getAttribute('value');
    return userEmail;
  }

  async getUserPhoneNumber() {
    const userPhoneNumber = (await this.page.waitForSelector(this.personalInfoTabElements.userPhoneInputValue)).getAttribute('value');
    return userPhoneNumber;
  }



}