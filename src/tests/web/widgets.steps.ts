import { When, Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../pages/world";
import { expect } from "@playwright/test";

When(`I click on the Highlights button`, async function (this:ICustomWorld){
  await this.pagesObj?.widgetsMainNavigationComponent.clickOnHighlightsButton();
});

Then(`I expect the highlights section to be displayed`, async function(this:ICustomWorld){
  const getWidgetHighlights = await this.pagesObj?.widgetsComponent.getWidgetHighlights();
  const isVisible = await getWidgetHighlights?.isVisible();
  expect(isVisible).toBeTruthy();
});

Then(`I expect list of Events to be displayed`, async function(this:ICustomWorld) {
const eventItems = await this.pagesObj?.widgetsComponent.fewEventsAreDisplayed();
expect(eventItems).toBeTruthy();
});

Then(`I expect Market names to be displayed`, async function(this:ICustomWorld){
  const marketnames = await this.pagesObj?.widgetsComponent.getMarketNames();
  const isVisible = await marketnames?.isVisible();
  expect(isVisible).toBeTruthy();
});

Then(`I expect Odds to be avalible`, async function(this:ICustomWorld){
  const odds = await this.pagesObj?.widgetsComponent.getOdds();
  const isVisible = await odds?.isVisible();
  expect(isVisible).toBeTruthy();
});

When(`I select and click on specific event`, async function(this:ICustomWorld){
  const modifiedText = await this.pagesObj?.widgetsComponent.clickRandomEventAndGetText(this);
  if(modifiedText !== null && modifiedText !== undefined) {
    this.modifiedText = modifiedText;
  }
});

Then(
  `I expect the Home team's name for the selected event to be displayed in Match Details`,
  async function(this: ICustomWorld){
    const textAfterClick = await this.pagesObj?.matchDetailsComponent.getHeaderHomeTeamName(this);
    expect(this.modifiedText).toContain(textAfterClick);
    console.log(this.modifiedText);
    console.log(textAfterClick);
  });

  Then(
    `I expect the Away team's name for the selected event to be displayed in Match Details`,
    async function(this:ICustomWorld){
      const textAfterClick = await this.pagesObj?.matchDetailsComponent.getHeaderAwayTeamName(this);
      expect(this.modifiedText).toContain(textAfterClick);
      console.log(this.modifiedText);
      console.log(textAfterClick);
    });

