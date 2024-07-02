
import MainNavComponent from './mainPage/mainNavComponent';
import RegistrationComponent from './mainPage/registrationComponent';
import RegisterComponent from './mainPage/registerComponent';

import { BasePage } from '../basePage';
import { Page, BrowserContext } from '@playwright/test';



export class PomProvider {
  basePage: BasePage;
  
  mainNavComponent: MainNavComponent;
  registrationComponent: RegistrationComponent;
  registerComponent: RegisterComponent;
  

  constructor(page: Page, context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.mainNavComponent = new MainNavComponent(page, context);
    this.registrationComponent = new RegistrationComponent(page, context);  
    this.registerComponent = new RegisterComponent(page, context);
   
}}