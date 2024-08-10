import { ICustomWorld } from "../../pages/world";
import { When } from "@cucumber/cucumber";
import { findCredentialsForEnv } from "../../support/auth/auth";

When('I click on the login button to display the login popup on mobile', async function(this: ICustomWorld) {
  await this.pagesObjMobile?.headerComponentMobile.clickLoginButtonMobile();
});

When('I enter "username" and "password" on login popup', async function(this:ICustomWorld) {
  const credentials = findCredentialsForEnv(this);

  await this.pagesObjMobile?.loginComponentMobile.enterUsernameMobile(credentials!.username);
  await this.pagesObjMobile?.loginComponentMobile.enterPasswordMobile(credentials!.password);
});

When('I enter "username" and "invalidPassword" on login popup', async function(this:ICustomWorld) {
  const credentials = findCredentialsForEnv(this);

  await this.pagesObjMobile?.loginComponentMobile.enterUsernameMobile(credentials!.username);
  await this.pagesObjMobile?.loginComponentMobile.enterPasswordMobile(credentials!.invalidPassword);
});

When('I enter "invalidUsername" and "password" on login popup', async function(this:ICustomWorld) {
  const credentials = findCredentialsForEnv(this);

  await this.pagesObjMobile?.loginComponentMobile.enterUsernameMobile(credentials!.invalidUsername);
  await this.pagesObjMobile?.loginComponentMobile.enterPasswordMobile(credentials!.password);
});