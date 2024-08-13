import { BasePage } from "../../basePage";

export default class searchComponent extends BasePage{

  private readonly fixtureTreeSearch = {
    searchInput: `input[placeholder='Search']`,
    searchResults:`.bto-sb-search-result`,
  };

  async searchSport(sport: string) {
    await this.page.waitForSelector(this.fixtureTreeSearch.searchInput);
    await this.page.locator(this.fixtureTreeSearch.searchInput).fill(sport);
  }

  getSearchResult() {
    return this.page.waitForSelector(this.fixtureTreeSearch.searchResults);
  
  }


}