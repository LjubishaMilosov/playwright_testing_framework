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