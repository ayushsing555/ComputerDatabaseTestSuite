const page = require("../pageobjects/page");
class Objects extends page {
  /**
   * define selectors using getter methods
   */

  // getting list of ComputerName
  get computerNames() {
    return $$("//tbody/tr/td[1]/a");
  }

  // getting input of computer
  get inputComputer() {
    return $("//input[@id='searchbox']");
  }

  // getting btn of search of filter
  get btnFilter() {
    return $("//input[@id='searchsubmit']");
  }

  // getting header
  get header() {
    return $("//h1/a");
  }

  get btnAddComputer() {
    return $("//a[@id='add']");
  }

  table = {
    get tableHeader() {
      return $$("//th//a[1]");
    },
  };

  /**
   * define action methods
   */

  // function of searching computer
  async filterComputer(value) {
    await this.inputComputer.setValue(value);
    await this.btnFilter.click();
  }
}
module.exports = new Objects();
