import { BasePage } from '../../basePage';

export default class mainNavigationComponent extends BasePage {
<<<<<<< HEAD
=======
  private readonly mainNavigatioElements = {
    sports: `#menu-item-1158`,
  };
>>>>>>> 3372c574aea4f789f80c4c636b3f938acee40f84
  

  async navigateToMainPage() {
    await this.goto();
  }

<<<<<<< HEAD
}
=======
  async navigateToSports() {
    await this.page.click(this.mainNavigatioElements.sports);
  }
  

};
>>>>>>> 3372c574aea4f789f80c4c636b3f938acee40f84
