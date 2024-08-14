import { ICustomWorld } from "../../pages/world";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


Given('I navigate to sports page', async function (this: ICustomWorld) {
  this.pagesObj?.mainNavigationComponent.navigateToSports();
});

When(`I type {string} into the search input field`, async function(this: ICustomWorld, sport: string) {
  await this.pagesObj?.searchComponent.searchSport(sport);
});

Then(`I expect to see a list of searched matches`, async function(this: ICustomWorld) {
  const quickEvent = await this.pagesObj?.searchComponent.getSearchResult();
  const isVisible = await quickEvent?.isVisible();
  expect(isVisible).toBeTruthy;
});

//QuickLinks LoginComponent
When(`I click on random league from Quick links`, async function (this: ICustomWorld) {
  await this.pagesObj?.quickLinksComponent.clickQuickLinksAndGetText(this);
});

Then(`I expect the league with the same name to be displayed in the title`, async function(this: ICustomWorld){
  const textAfterClick = await this.pagesObj?.widgetPillsNavComponent.getWidgetTitle(this);
  //expect(this.modifiedText).toContain(textAfterClick);  
  expect(textAfterClick).toContain(this.modifiedText);
});