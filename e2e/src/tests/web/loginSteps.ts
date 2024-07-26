import { ICustomWorld } from "../../pages/world";
import { findCredentialsForEnv } from "../../support/auth/auth";
import { Given, Then, When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('I navigate to the home page', async function(this:ICustomWorld) {
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
});


When('I click on the user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.loginComponent.expandDropdown();
})

When('I select the personal info option from loggedin user dropdown', async function(this: ICustomWorld) {
  await this.pagesObj?.loginComponent.selectPersonalInfo();
}); 

Then('I expect the user personal details to match the registration details', async function(this: ICustomWorld) {
  const userUsername = await this.pagesObj?.loginComponent.getUserUsername();
  const userFirstname = await this.pagesObj?.loginComponent.getUserFirstName();
  const userLastname = await this.pagesObj?.loginComponent.getUserLastName();
  const userEmail = await this.pagesObj?.loginComponent.getUserEmail();
  const userPhonenumber = await this.pagesObj?.loginComponent.getUserPhoneNumber();
  const credentials = findCredentialsForEnv(this);

  const enteredUsername = credentials!.username;
  const enteredFirstname = credentials!.firstname;
  const enteredLastname = credentials!.lastname;
  const enteredEmail = credentials!.email;
  const enteredUserPhonenumber = credentials!.phone;

  expect(userUsername).toEqual(enteredUsername);
  expect(userFirstname).toEqual(enteredFirstname);
  expect(userLastname).toEqual(enteredLastname);
  expect(userEmail).toEqual(enteredEmail);
  expect(userPhonenumber).toEqual(enteredUserPhonenumber);
//   console.log(userUsername);
//   console.log(enteredUsername);
//   console.log(userFirstname);
//   console.log(enteredFirstname);
//   console.log(userLastname);
//   console.log(enteredLastname);
//   console.log(userEmail);
//   console.log(enteredEmail);
//   console.log(userPhonenumber);
//   console.log(enteredUserPhonenumber);


})
