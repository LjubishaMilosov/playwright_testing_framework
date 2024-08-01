import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import LoginComponent from './mainPage/loginComponent';
import MainNavigationComponent from './mainPage/mainNavigationComponent';
import RegistrationComponent from './mainPage/registrationComponent';
import PlayerMenuTabsComponent from './mainPage/playerMenuTabsComponent';





export class PomProvider {
  basePage: BasePage;
  
  loginComponent: LoginComponent;
  mainNavigationComponent: MainNavigationComponent;
  playerMenuTabsComponent: PlayerMenuTabsComponent;

  registrationComponent: RegistrationComponent;
  
  


  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.loginComponent = new LoginComponent(page,context);
    this.mainNavigationComponent = new MainNavigationComponent(page, context); 
    this.registrationComponent = new RegistrationComponent(page, context);
   this.playerMenuTabsComponent = new PlayerMenuTabsComponent(page, context);
   
}}