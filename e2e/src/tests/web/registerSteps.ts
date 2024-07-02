import { ICustomWorld } from '../../pages/world';
import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';




 
Given('I navigate to the register page', async function (this: ICustomWorld) {
  await this.pagesObj?.basePage.goto('/register');
});


When('I enter random first name', async function(this: ICustomWorld) {
  await this.pagesObj?.registerComponent.enterFirstname(this);
});

When('I enter random last name', async function(this: ICustomWorld) {
  await this.pagesObj?.registerComponent.enterLastName(this)
});

When('I enter random username', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.enterUsername(this);
})

When('I enter random email address', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.enterEmail(this);
})

When('I enter random phone number', async function(this: ICustomWorld) {
  await this.pagesObj?.registerComponent.enterPhoneNumber(this);
});

When('I enter the password', async function(this:ICustomWorld){
  await this.pagesObj?.registerComponent.enterPassword1();
})

When('I enter the confirm password', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.enterConfirmPassword1();
})

When('I enter random promo code', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.enterPromoCode();
})

When('I click terms and conditions checkbox', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.clickTermsAndConditionsCheckbox();
})

When('I click on register button', async function(this:ICustomWorld) {
  await this.pagesObj?.registerComponent.clickRegisterButton1();
})

Then('I expect user to be successfully registered', async function(this: ICustomWorld) {
  const loggedUser = await this.pagesObj?.registerComponent.getLoggedUser1();
  const isVisible = await loggedUser?.isVisible;
  expect(isVisible).toBeTruthy();
})

When('I click on the sportbook tab', async function(this:ICustomWorld){
  await this.pagesObj?.registerComponent.clickOnSportbookTab1();
})

When('I click on the user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.registerComponent.expandDropdown1();
})

When('I select the personal info option from loggedin user dropdown', async function(this: ICustomWorld) {
  await this.pagesObj?.registerComponent.selectPersonalInfo1();
});

Then('I expect the user personal details to match the registration details', async function(this: ICustomWorld) {
  const userFirstname = await this.pagesObj?.registerComponent.getUserFirstName1();
  
  const enteredFirstname = this.firstname;
  expect(userFirstname).toEqual(enteredFirstname);
  console.log(userFirstname)
  console.log(enteredFirstname)
})



// When('I fill in first name', async function(this: ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInFirstName(randomFirstName);
//  console.log(`${randomFirstName}`);
// });

// When('I fill in last name', async function(this: ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInLastName(randomLastName);
//   console.log(`${randomLastName}`);
// });

// When('I fill in username', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInUsername(randomUsername);
//   console.log(`${randomUsername}`);
// })

// When('I fill in email address', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInEmail(randomEmail);
//   console.log(`${randomEmail}`);
// })

// When('I fill in phone number', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInPhoneNumber(randomPhoneNumber);
//   console.log(`${randomPhoneNumber}`);
// })

// When('I enter password', async function(this:ICustomWorld){
//   await this.pagesObj?.registrationComponent.fillInPassword(password);
// })

// When('I enter confirm password', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInConfirmPassword(password);
// })

// When('I enter promo code', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.fillInPromoCode(promoCode);
// })

// When('I check the terms and conditions checkbox', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.checkTermsAndConditionsCheckbox();
// })

// When('I click on the register button', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.clickRegisterButton();
// })

// Then('I expect the user to be successfully registered', async function(this: ICustomWorld) {
//   const loggedUser = await this.pagesObj?.registrationComponent.getLoggedUser();
//   const isVisible = await loggedUser?.isVisible;
//   expect(isVisible).toBeTruthy();
// })

// When('I expect the user personal details to match the registration details', async function(this:ICustomWorld) {
//   await this.pagesObj?.registrationComponent.selectPersonalInfo();
// })



