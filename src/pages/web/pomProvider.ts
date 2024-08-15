import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import LoginComponent from './mainPage/loginComponent';
import MainNavigationComponent from './mainPage/mainNavigationComponent';
import RegistrationComponent from './mainPage/registrationComponent';
import PlayerInfoComponent from './mainPage/playerInfoComponent';
import SearchComponent from './fixtureTree/searchComponent';
import QuickLinksComponent from './fixtureTree/quickLinksComponent';
import WidgetPillsNavComponent from './navigations/widgetPillsNavComponent';
import AllSportsComponent from './fixtureTree/allSportsComponent';
import TournamentsComponent from './widgets/tournamentsComponent';


export class PomProvider {
  basePage: BasePage;
  
  loginComponent: LoginComponent;
  mainNavigationComponent: MainNavigationComponent;
  playerInfoComponent: PlayerInfoComponent;
  registrationComponent: RegistrationComponent;
  searchComponent: SearchComponent;
  quickLinksComponent: QuickLinksComponent;
  widgetPillsNavComponent: WidgetPillsNavComponent
  allSportsComponent: AllSportsComponent;
  turnamentsComponent: TournamentsComponent;


  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    //mainPage
    this.loginComponent = new LoginComponent(page,context);
    this.mainNavigationComponent = new MainNavigationComponent(page, context); 
    this.registrationComponent = new RegistrationComponent(page, context);
    this.playerInfoComponent = new PlayerInfoComponent(page,context);
    //widgets
    this.turnamentsComponent = new TournamentsComponent(page,context);
    //FixtureTree
    this.searchComponent = new SearchComponent(page, context);
    this.quickLinksComponent = new QuickLinksComponent(page, context);
    this.allSportsComponent = new AllSportsComponent(page,context);
    //navigations
    this.widgetPillsNavComponent = new WidgetPillsNavComponent(page,context);
  }
}