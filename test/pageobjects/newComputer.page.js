class newComputerPage {
  // getting the inputComputer
  get inputComputerName() {
    return $("//input[@id='name']");
  }

  // getting the introduced input
  get introduced() {
    return $("//input[@id='introduced']");
  }

  // getting the discontinued input
  get discontinued() {
    return $("//input[@id='discontinued']");
  }

  // getting selectBox
  get btnSelectBox() {
    return $("//select[@id='company']");
  }

  // getting the option list
  get selectOptionList() {
    return $$("//select/option");
  }

  // getting button of create computer
  get btnCreateComputer() {
    return $("//input[@value='Create this computer']");
  }

  // getting the select box
  async selectBox() {
    await this.btnSelectBox.click();
  }

  // functioning the create a  Computer
  async addComputer(name, introDate, discontinuedDate) {
    await this.inputComputerName.setValue(name);
    await this.introduced.setValue(introDate);
    await this.discontinued.setValue(discontinuedDate);
    await this.btnCreateComputer.click();
  }
}
module.exports = new newComputerPage();
