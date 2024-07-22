import { ICustomWorld } from "../../pages/world";
import { findCredentialsForEnv } from "../../support/auth/auth";
import { Given, Then, When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(/^I navigate to the home page$/, async function(this:ICustomWorld) {
    await this.pagesObj?.basePage.goto();
});

When('I enter "username" and "password"', async function(this:ICustomWorld) {
    const credentials = findCredentialsForEnv(this);

    await this.pagesObj?.loginComponent.enterUsername(credentials!.username);
    await this.pagesObj?.loginComponent.enterPassword(credentials!.password);
});

When('I click the login  button', async function(this:ICustomWorld) {
    await this.pagesObj?.loginComponent.clickLoginButton();
});

Then('I expect to be successfully logged in', async function(this:ICustomWorld) {
    const userMenu = await this.pagesObj?.loginComponent.getLoggedUserMenu();
    const isVisible = await userMenu?.isVisible();
    expect(isVisible).toBeTruthy();
})
