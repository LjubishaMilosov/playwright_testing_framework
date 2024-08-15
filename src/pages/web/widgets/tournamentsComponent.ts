import { BasePage } from "../../basePage";

export default class TournamentsComponent extends BasePage {
  private readonly tournamentsComponentElements =  {
    allTournaments: `.bto-sb-tournament-items a`,
    tournamentWidgetHeader: `//ul/li/a[contains(text(), 'Tournaments')]`,
    //allTournamentsHeaders: `.bto-sb-widget-wrap div.bto-sb-widget.bto-sb-widget-main-nav.bto-sb-widget-pills-nav > div > div > ul > li a`,
  }

  async getTournaments() {
    await this.page.waitForSelector(this.tournamentsComponentElements.allTournaments);
    const tournamentItems = await this.page.$$(this.tournamentsComponentElements.allTournaments);
    return tournamentItems;
  }

  async clickOnTournamentWidgetHeader() {
    await this.page.click(this.tournamentsComponentElements.tournamentWidgetHeader);
  }

}