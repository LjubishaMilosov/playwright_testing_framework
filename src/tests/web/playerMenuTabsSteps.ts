import { ICustomWorld } from "../../pages/world";
import { Then, When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";




When('I click on the user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.playerMenuTabsComponent.expandDropdown();
});

When('I select the personal info option from loggedin user dropdown', async function(this: ICustomWorld) {
  await this.pagesObj?.playerMenuTabsComponent.selectPersonalInfo();
}); 

Then('I expect registration details to match user personal details', async function(this: ICustomWorld) {
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