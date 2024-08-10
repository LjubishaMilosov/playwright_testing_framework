import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import HeaderComponentMobile from './mainPageMobile/headerComponentMobile';
import LoginComponentMobile from './mainPageMobile/loginComponentMobile';

export class PomProviderMobile {
  basePage: BasePage;
  headerComponentMobile: HeaderComponentMobile;
  loginComponentMobile : LoginComponentMobile;

  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.headerComponentMobile = new HeaderComponentMobile(page,context);
    this.loginComponentMobile = new LoginComponentMobile(page,context);
}
}