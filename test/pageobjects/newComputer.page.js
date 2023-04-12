class newComputerPage {
  get inputComputerName() {
    return $("//input[@id='name']");
  }

  get introduced() {
    return $("//input[@id='introduced']");
  }

  get discontinued() {
    return $("//input[@id='discontinued']");
  }

  get btnSelectBox() {
    return $("//select[@id='company']");
  }

  get selectOptionList() {
    return $$("//select/option");
  }

  get btnCreateComputer() {
    return $("//input[@value='Create this computer']");
  }

  async selectBox() {
    await this.btnSelectBox.click();
  }

  async addComputer(name, introDate, discontinuedDate) {
    await this.inputComputerName.setValue(name);
    await this.introduced.setValue(introDate);
    await this.discontinued.setValue(discontinuedDate);
    await this.btnCreateComputer.click();
  }
}
module.exports = new newComputerPage();
