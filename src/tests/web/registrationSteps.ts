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