import { BasePage } from '../../basePage';


export default class SearchComponentMobile extends BasePage {
  private readonly searchMobileElements = {
    searchToggle: `.bto-sb-mb-search`,
    searchInput: `input[placeholder='Search']`,
    searchResult:`.bto-sb-mb-search-content`
  };

async clickOnSearchButton() {
  await this.page.click(this.searchMobileElements.searchToggle);
}

async searchSport( sport:string) {
  await this.page.waitForSelector(this.searchMobileElements.searchInput);
  await this.page.locator(this.searchMobileElements.searchInput).fill(sport);
}

async getSearchResult() {
  return this.page.waitForSelector(this.searchMobileElements.searchResult);
};

async clearResults() {
  const inpuElement = await this.page.waitForSelector(this.searchMobileElements.searchInput);
  // Press Backspace repeatedly until the input is empty
  const inputValue = await inpuElement.inputValue();
    for(let i = 0; i < inputValue.length; i++){
      await this.page.keyboard.press('Backspace');
    }
    await this.page.click(this.searchMobileElements.searchToggle);

}

}