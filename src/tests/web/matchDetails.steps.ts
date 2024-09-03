import { Then} from '@cucumber/cucumber'
import { ICustomWorld } from '../../pages/world';
import { expect } from '@playwright/test';

Then(`I expect the event name bellow the header for Home team to remain the same`, async function(this:ICustomWorld) {
  const textAfterClick = await this.pagesObj?.matchDetailsComponent.getEventNameForHometeam(this);
  expect(this.modifiedText).toContain(textAfterClick);
});

Then(`I expect the event name bellow the header for Away team to remain the same`, async function(this:ICustomWorld) {
  const textAfterClick = await this.pagesObj?.matchDetailsComponent.getEventNameForAwayTeam(this);
  expect(this.modifiedText).toContain(textAfterClick);
});

Then(`I expect the outcome names to be displayed`, async function(this:ICustomWorld) {
  const marketNames = await this.pagesObj?.matchDetailsComponent.getOutcomeName();
  const isVisible = await marketNames?.isVisible();
  expect(isVisible).toBeTruthy();
});
