import { ICustomWorld } from '../../pages/world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';




const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomUsername = `${randomFirstName}.${randomLastName}`
const randomEmail = `${randomUsername}` + '@test.com'
const randomPhoneNumber = '234' + `${faker.string.numeric(9)}`
const password = 'B2Btests@'
const promoCode = 'PROMO123'


// const firstName = generateRandomString(8); // generate a random string of length 8
// When('I fill in "first name"', async function(this: ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInFirstName(firstName);
//   console.log(firstName)
 
// });

// const lastName = generateRandomString(6); // generate a random string of length 8
// When('I fill in "last name"', async function(this: ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInLastName(lastName);
//   console.log(lastName)
// });
 
Given('I navigate to the registration page', async function (this: ICustomWorld) {
  await this.pagesObj?.basePage.goto('/register');
});

When('I fill in first name', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInFirstName(randomFirstName);
 console.log(`${randomFirstName}`);
});

When('I fill in last name', async function(this: ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInLastName(randomLastName);
  console.log(`${randomLastName}`);
});

When('I fill in username', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInUsername(randomUsername);
  console.log(`${randomUsername}`);
})

When('I fill in email address', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInEmail(randomEmail);
  console.log(`${randomEmail}`);
})

When('I fill in phone number', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInPhoneNumber(randomPhoneNumber);
  console.log(`${randomPhoneNumber}`);
})

When('I enter password', async function(this:ICustomWorld){
  await this.pagesObj?.registrationComponent.fillInPassword(password);
})

When('I enter confirm password', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInConfirmPassword(password);
})

When('I enter promo code', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.fillInPromoCode(promoCode);
})

When('I check the terms and conditions checkbox', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.checkTermsAndConditionsCheckbox();
})

When('I click on the register button', async function(this:ICustomWorld) {
  await this.pagesObj?.registrationComponent.clickRegisterButton();
})

Then('I expect the user to be successfully registered', async function(this: ICustomWorld) {
  const loggedUser = await this.pagesObj?.registrationComponent.getLoggedUser();
  const isVisible = await loggedUser?.isVisible;
  expect(isVisible).toBeTruthy();
})

// When('I expect the user personal details to match the registration details', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.selectPersonalInfo();
// })






// Then('I expect the user to be successfully registered', async function(this:ICustomWorld) {
//   await this.pagesObj?.basePage.registrationComponent.waitForText('Welcome');
// })


// When('I click on the login button to display the login popup', async function (this: ICustomWorld) {
//   await this.pagesObj?.headerComponent.clickFirstLoginButton();
// });

// When('I enter "username" and "password"', async function (this: ICustomWorld) {
//   const credentials = findCredentialsForEnv(this);

//   await this.pagesObj?.loginComponent.enterUserName(credentials!.username);
//   await this.pagesObj?.loginComponent.enterPassword(credentials!.password);
// });

// When('I click the login submit button', async function (this: ICustomWorld) {
//   await this.pagesObj?.loginComponent.clickSecondLoginButton();
// });

// Then('I expect to be successfully logged in', async function (this: ICustomWorld) {
//   const iconUser = await this.pagesObj?.loginComponent.getIconAfterLogin();
//   const isVisible = await iconUser?.isVisible();
//   expect(isVisible).toBeTruthy();
// });
