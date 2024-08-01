import { ICustomWorld } from '../../pages/world';
import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';




 
Given(`I navigate to the register page`, async function (this: ICustomWorld) {
  await this.pagesObj?.mainNavigationComponent.navigateToRegistrationPage();
});

When(`I enter random first name`, async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterFirstname(this);
});

When(`I enter random last name`, async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterLastName(this)
});

When(`I enter random username`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterUsername(this);
});

When(`I enter random email address`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterEmail(this);
});

When('I enter random phone number', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterPhoneNumber(this);
});

When(`I enter the password`, async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.enterPassword();
});

When(`I enter the confirm password`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterConfirmPassword();
});

When(`I enter random promo code`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterPromoCode();
});

When(`I click terms and conditions checkbox`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.clickTermsAndConditionsCheckbox();
});

When(`I click on register button`, async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.clickRegisterButton();
});

Then(`I expect user to be redirected to the thank-you page`, async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.waitUrlToChange();

  const currentUrl = this.page?.url();
  const expectedUrl = 'https://qa.btobet.net/thank-you/';
  expect(currentUrl).toEqual(expectedUrl);
  console.log(currentUrl);
  console.log(expectedUrl);
  
});

Then(`I expect user to be redirected to the home page`, async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.waitUrlToChangeHome();
  //const currentUrl = this.pagesObj?.registrationComponent.getCurrentUrl();
  const currentUrl = this.page?.url();
  const expectedUrl = 'https://qa.btobet.net/';
  expect(currentUrl).toEqual(expectedUrl);
  console.log(currentUrl);
  console.log(expectedUrl);
  
});

When(`I click on the sportbook tab`, async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.clickOnSportbookTab();
});

When(`I enter username and password`, async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.enterLoginUsername(this);
  await this.pagesObj?.registrationComponent.enterLoginPassword();
});

When('I click on the user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.playerMenuTabsComponent.expandDropdown();
})

When('I select the personal info option from loggedin user dropdown', async function(this: ICustomWorld) {
  await this.pagesObj?.playerMenuTabsComponent.selectPersonalInfo();
}); 

Then('I expect the user personal details to match the registration details', async function(this: ICustomWorld) {
  const userUsername = await this.pagesObj?.playerMenuTabsComponent.getUserUsername();
  const userFirstname = await this.pagesObj?.playerMenuTabsComponent.getUserFirstName();
  const userLastname = await this.pagesObj?.playerMenuTabsComponent.getUserLastName();
  const userEmail = await this.pagesObj?.playerMenuTabsComponent.getUserEmail();
  const userPhonenumber = await this.pagesObj?.playerMenuTabsComponent.getUserPhoneNumber();
  
  const enteredUsername = this.username;
  const enteredFirstname = this.firstname;
  const enteredLastName = this.lastname;
  const enteredEmail = this.email;
  const enteredPhonenumber = this.phone;

  expect(userUsername).toEqual(enteredUsername);
  expect(userFirstname).toEqual(enteredFirstname);
  expect(userLastname).toEqual(enteredLastName);
  expect(userEmail).toEqual(enteredEmail);
  expect(userPhonenumber).toEqual(enteredPhonenumber);
  console.log(userUsername)
  console.log(enteredUsername)
  console.log(userFirstname)
  console.log(enteredFirstname)
  console.log(userLastname)
  console.log(enteredLastName)
  console.log(userEmail)
  console.log(enteredEmail)
  console.log(userPhonenumber)
  console.log(enteredPhonenumber)
});