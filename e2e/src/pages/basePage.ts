import config from '../support/setup/config';
import { Page, BrowserContext } from '@playwright/test';

export class BasePage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  public goto(optionalUrl?: string) {
    const pageToGoTo = optionalUrl ? config.baseUrl + optionalUrl : config.baseUrl;

    return this.page.goto(pageToGoTo);
  }
}
