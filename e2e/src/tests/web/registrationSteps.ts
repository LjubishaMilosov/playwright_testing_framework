import { ICustomWorld } from '../../pages/world';
import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';




 
Given('I navigate to the register page', async function (this: ICustomWorld) {
  await this.pagesObj?.basePage.goto('/register');
});


When('I enter random first name', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterFirstname(this);
});

When('I enter random last name', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterLastName(this)
});

When('I enter random username', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterUsername(this);
})

When('I enter random email address', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterEmail(this);
})

When('I enter random phone number', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterPhoneNumber(this);
});

When('I enter the password', async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.enterPassword();
})

When('I enter the confirm password', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterConfirmPassword();
})

When('I enter random promo code', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.enterPromoCode();
})

When('I click terms and conditions checkbox', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.clickTermsAndConditionsCheckbox();
})

When('I click on register button', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.clickRegisterButton();
})

Then('I expect user to be successfully registered', async function(this: ICustomWorld) {
  const loggedUser = await this.pagesObj?.registrationComponent.getLoggedUser();
  const isVisible = await loggedUser?.isVisible;
  expect(isVisible).toBeTruthy();
})

When('I click on the sportbook tab', async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.clickOnSportbookTab();
})

When('I click on the user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.expandDropdown();
})

When('I select the personal info option from loggedin user dropdown', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.selectPersonalInfo();
});

Then('I expect the user personal details to match the registration details', async function(this: ICustomWorld) {
  const userFirstname = await this.pagesObj?.registrationComponent.getUserFirstName();
  
  const enteredFirstname = this.firstname;
  expect(userFirstname).toEqual(enteredFirstname);
  console.log(userFirstname)
  console.log(enteredFirstname)
})