import { Given, When, Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../pages/world";
import { expect } from '@playwright/test';
 

Given(`I navigate to sports US layout mobile page`, async function (this: ICustomWorld) {
  await this.pagesObjMobile?.mainNavigationComponentMobile.navigateToSportsUSlayoutMobile();
});


When(`I click on All Sports button`, async function (this: ICustomWorld) {
  await this.pagesObjMobile?.allSPortsComponentMobile.clickOnAllSports();
});

When(`I click on sport {string}`, async function (this: ICustomWorld, sportName: string) {
  await this.pagesObjMobile?.allSPortsComponentMobile.clickOnSelectedSport(this, sportName);
});

When(`I click on random category`, async function(this:ICustomWorld) {
  await this.pagesObjMobile?.categoryPageMobile.getRandomIndexForCategories(this);
  await this.pagesObjMobile?.categoryPageMobile.clickOnRandomCategory(this);
});

Then('I expect to see a list of avaliable tournaments on mobile', async function (this: ICustomWorld) {
  const listOfTournaments = await this.pagesObjMobile?.categoryPageMobile.getListOfSelectedTournaments(this);
  const isVisible = await listOfTournaments?.isVisible();
  expect(isVisible).toBeTruthy();
});

When('I click on random tournament on mobile', async function (this: ICustomWorld) {
  await this.pagesObjMobile?.categoryPageMobile.clickOnRandomTournament(this);
});

// AllSportsComponenet - Scrollable Menu
When (`I click on {string} from the scrollable menu`, async function(this:ICustomWorld, sportName:string) {
  await this.pagesObjMobile?.allSPortsComponentMobile.clickSportFromScollableMenu(this, sportName);
});

When(`I click on search button`, async function(this:ICustomWorld) {
  await this.pagesObjMobile?.searchComponentMobile.clickOnSearchButton();
});

When(`I type in the search input field {string}`, async function(this: ICustomWorld, sport: string) {
  await this.pagesObjMobile?.searchComponentMobile.searchSport(sport);
});

Then(`I expect to see a list of searched matches on mobile`, async function(this:ICustomWorld) {
  const quickEvent = await this.pagesObjMobile?.searchComponentMobile.getSearchResult();
  const isVisible = await quickEvent?.isVisible();
  expect(isVisible).toBeTruthy();
});

When(`I reset previously searched results on mobile`, async function(this:ICustomWorld) {
  await this.pagesObjMobile?.searchComponentMobile.clearResults();
});

Then('I expect to see a list of avaliable events on mobile', async function (this: ICustomWorld) {
  const listOfEvents = await this.pagesObjMobile?.categoryPageMobile.getListOfSelectedEvents();
  const isVisible = await listOfEvents?.isVisible();
  expect(isVisible).toBeTruthy();
});