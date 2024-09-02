import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import HeaderComponentMobile from './mainPageMobile/headerComponentMobile';
import LoginComponentMobile from './mainPageMobile/loginComponentMobile';
import AllSPortsComponentMobile from './fixtureTreeMobile/allSportsComponentMobile';
import SearchComponentMobile from './fixtureTreeMobile/searchComponentMobile';
import MainNavigationComponentMobile from './mainPageMobile/mainNavigationComponentMobile';
import CategoryPageMobile from './widgetsMobile/categoryPageMobile';


export class PomProviderMobile {
  basePage: BasePage;
  headerComponentMobile: HeaderComponentMobile;
  loginComponentMobile : LoginComponentMobile;
  allSPortsComponentMobile: AllSPortsComponentMobile;
  searchComponentMobile: SearchComponentMobile;
  mainNavigationComponentMobile : MainNavigationComponentMobile;
  categoryPageMobile :CategoryPageMobile;
  

  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.headerComponentMobile = new HeaderComponentMobile(page,context);
    this.loginComponentMobile = new LoginComponentMobile(page,context);
    this.allSPortsComponentMobile = new AllSPortsComponentMobile(page,context);
    this.searchComponentMobile = new SearchComponentMobile(page,context);
    this.mainNavigationComponentMobile = new MainNavigationComponentMobile(page,context);
    this.categoryPageMobile = new CategoryPageMobile(page, context);
}
}