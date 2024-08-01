import { ICustomWorld } from "../../pages/world";
import { findCredentialsForEnv } from "../../support/auth/auth";
import { Given, Then, When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('I navigate to the home page', async function(this:ICustomWorld) {
    await this.pagesObj?.mainNavigationComponent.navigateToMainPage();
});

When('I enter "username" and "password"', async function(this:ICustomWorld) {
    const credentials = findCredentialsForEnv(this);

    await this.pagesObj?.loginComponent.enterUsername(credentials!.username);
    await this.pagesObj?.loginComponent.enterPassword(credentials!.password);
});

When('I click the login button', async function(this:ICustomWorld) {
    await this.pagesObj?.loginComponent.clickLoginButton();
});

Then('I expect to be successfully logged in', async function(this:ICustomWorld) {
    const userMenu = await this.pagesObj?.loginComponent.getLoggedUserMenu();
    const isVisible = await userMenu?.isVisible();
    expect(isVisible).toBeTruthy();
});

Then('I expect error message to appear', async function(this:ICustomWorld) {
  const errorMsg = await this.pagesObj?.loginComponent.getLoginErrorMsg();
  const expectedLoginErrorMsg = "Invalid Login Details."
  expect(errorMsg).toEqual(expectedLoginErrorMsg);

  console.log(errorMsg);
});

When('I enter "username" and "invalidPassword"', async function(this:ICustomWorld) {
  const credentials = findCredentialsForEnv(this);

  await this.pagesObj?.loginComponent.enterUsername(credentials!.username);
  await this.pagesObj?.loginComponent.enterPassword(credentials!.invalidPassword);
});

When('I enter "invalidUsername" and "password"', async function(this:ICustomWorld) {
  const credentials = findCredentialsForEnv(this);

  await this.pagesObj?.loginComponent.enterUsername(credentials!.invalidUsername);
  await this.pagesObj?.loginComponent.enterPassword(credentials!.password);
});
