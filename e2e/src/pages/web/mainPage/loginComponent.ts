import { BasePage } from "../../basePage";


export default class LoginComponent extends BasePage{
    private readonly loginFormElements = {
        usernameInput: `[class='form-control input-sm bto-form-control-username btosystem-enter']`,
        passwordInput: `[class='form-control input-sm bto-form-control-password btosystem-enter show-content']`,
        loginButton: `[class='btn btn-sm btn-default btn-user-success btosystem-login-btn']`,
        loggedUserMenu: `[class='bto-user-logged']`,
        dropdownMenu: `.btn-group.personal button.dropdown-toggle`,
        personalInfoOption: `//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Personal Info']`,
        usernameText: `div[class="bto-player-name pull-left"] span[class="bto-username"]`,
        userFirstNameInputValue: `input[name="FirstName"]`,
        userLastNameInputValue: `input[name="LastName"]`,
        userEmailInputValue: `input[name="Email"]`,
        userPhoneInputValue: `input[name="PhoneNumber"]`,

    };

    async enterUsername(user:string) {
        await this.page.locator(this.loginFormElements.usernameInput).fill(user);
        
    }
    
    async enterPassword(password:string) {
        await this.page.locator(this.loginFormElements.passwordInput).fill(password);
    }
    async clickLoginButton() {
        await this.page.click(this.loginFormElements.loginButton);
    }

    getLoggedUserMenu() {
        return this.page.waitForSelector(this.loginFormElements.loggedUserMenu);
    }

    async expandDropdown() {
    await this.page.waitForLoadState("networkidle")
    await this.page.click(this.loginFormElements.dropdownMenu);
  }

  async selectPersonalInfo() {
    await this.page.waitForSelector(this.loginFormElements.personalInfoOption);
    await this.page.click(this.loginFormElements.personalInfoOption);
  }

  async getUserUsername() {
    const userUsername = (await this.page.waitForSelector(this.loginFormElements.usernameText)).textContent();
    return userUsername;
  }

  async getUserFirstName() {
    const userFirstname = (await this.page.waitForSelector(this.loginFormElements.userFirstNameInputValue)).getAttribute('value');
    return userFirstname;
  }

  async getUserLastName() {
    const userLastname = (await this.page.waitForSelector(this.loginFormElements.userLastNameInputValue)).getAttribute('value');
    return userLastname;
  }

  async getUserEmail() {
    const userEmail = (await this.page.waitForSelector(this.loginFormElements.userEmailInputValue)).getAttribute('value');
    return userEmail;
  }

  async getUserPhoneNumber() {
    const userPhoneNumber = (await this.page.waitForSelector(this.loginFormElements.userPhoneInputValue)).getAttribute('value');
    return userPhoneNumber;
  }
    

}
