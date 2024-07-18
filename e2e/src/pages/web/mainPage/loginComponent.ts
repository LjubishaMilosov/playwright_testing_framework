import { BasePage } from "../../basePage";

export default class LoginComponent extends BasePage{
    private readonly loginFormElements = {
        usernameInput: `[class='form-control input-sm bto-form-control-username btosystem-enter']`,
        passwordInput: `[class='form-control input-sm bto-form-control-password btosystem-enter show-content']`,
        loginButton: `[class='btn btn-sm btn-default btn-user-success btosystem-login-btn']`,
        loggedUserMenu: `[class='bto-user-logged']`
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
    

}
