import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';

export class PomProviderMobile {
  basePage: BasePage;

  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    
}
}