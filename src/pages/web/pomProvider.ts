import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import LoginComponent from './mainPage/loginComponent';
import MainNavigationComponent from './mainPage/mainNavigationComponent';
import RegistrationComponent from './mainPage/registrationComponent';
import PlayerInfoComponent from './mainPage/playerInfoComponent';





export class PomProvider {
  basePage: BasePage;
  
  loginComponent: LoginComponent;
  mainNavigationComponent: MainNavigationComponent;
  playerInfoComponent: PlayerInfoComponent;
  registrationComponent: RegistrationComponent;
  
  


  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.loginComponent = new LoginComponent(page,context);
    this.mainNavigationComponent = new MainNavigationComponent(page, context); 
    this.registrationComponent = new RegistrationComponent(page, context);
    this.playerInfoComponent = new PlayerInfoComponent(page,context);
   
}}