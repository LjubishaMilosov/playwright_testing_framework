import { ICustomWorld } from "../../pages/world";
import { findCredentialsForEnv } from "../../support/auth/auth";
import { Then, When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";




When('I click on user dropdown menu', async function(this: ICustomWorld) {
  await this.pagesObj?.playerInfoComponent.expandDropdown();
});

When(`I select 'Personal Info' option from logged in user dropdown`, async function(this: ICustomWorld) {
  await this.pagesObj?.playerInfoComponent.selectPersonalInfo();
}); 

Then('I expect registration details to match user personal details', async function(this: ICustomWorld) {
  const expectedUserUsername = await this.pagesObj?.playerInfoComponent.getUserUsername();
  const expectedUserFirstname = await this.pagesObj?.playerInfoComponent.getUserFirstName();
  const expectedUserLastname = await this.pagesObj?.playerInfoComponent.getUserLastName();
  const expectedUserEmail = await this.pagesObj?.playerInfoComponent.getUserEmail();
  const expectedUserPhonenumber = await this.pagesObj?.playerInfoComponent.getUserPhoneNumber();
  
  const enteredUsername = this.username;
  const enteredFirstname = this.firstname;
  const enteredLastName = this.lastname;
  const enteredEmail = this.email;
  const enteredPhonenumber = this.phone;

  expect(expectedUserUsername).toEqual(enteredUsername);
  expect(expectedUserFirstname).toEqual(enteredFirstname);
  expect(expectedUserLastname).toEqual(enteredLastName);
  expect(expectedUserEmail).toEqual(enteredEmail);
  expect(expectedUserPhonenumber).toEqual(enteredPhonenumber);
  console.log(expectedUserUsername)
  console.log(enteredUsername)
  console.log(expectedUserFirstname)
  console.log(enteredFirstname)
  console.log(expectedUserLastname)
  console.log(enteredLastName)
  console.log(expectedUserEmail)
  console.log(enteredEmail)
  console.log(expectedUserPhonenumber)
  console.log(enteredPhonenumber)
});

Then(`I expect 'Personal' menu tab to be present`, async function(this: ICustomWorld) {
  const expectedPersonalTabText = await this.pagesObj?.playerInfoComponent.getPersonalTabtext();
  const personalTabText = 'Personal';
  expect(expectedPersonalTabText).toEqual(personalTabText);

  console.log(expectedPersonalTabText);
  console.log(personalTabText);
});

Then('I expect logged in user to have correct username', async function(this: ICustomWorld) {
  const expectedUserUsername = await this.pagesObj?.playerInfoComponent.getUserUsername();
  
  const credentials = findCredentialsForEnv(this);
  const enteredUsername = credentials!.username;
  
  expect(expectedUserUsername).toEqual(enteredUsername);
 
  console.log(expectedUserUsername)
  console.log(enteredUsername)
  
});