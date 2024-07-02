import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';
import MainNavigationComponent from './mainPage/mainNavigationComponent';
import RegistrationComponent from './mainPage/registrationComponent';



export class PomProvider {
  basePage: BasePage;
  
  mainNavigationComponent: MainNavigationComponent;
  
  registrationComponent: RegistrationComponent;

  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.mainNavigationComponent = new MainNavigationComponent(page, context); 
    this.registrationComponent = new RegistrationComponent(page, context);
   
}}