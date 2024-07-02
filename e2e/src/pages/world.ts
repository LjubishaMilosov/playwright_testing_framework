import { PomProvider } from './web/pomProvider';
import { PomProviderMobile } from './mobile/pomProviderMobile';
import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';

export interface ICustomWorld extends World {
  page?: Page;
  context?: BrowserContext;
  pagesObj?: PomProvider;
  pagesObjMobile?: PomProviderMobile;
  popupPage?: Page;
  
  
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  phone?: string;

}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
