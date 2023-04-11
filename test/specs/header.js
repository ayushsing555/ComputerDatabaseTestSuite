import LoginPage from "../pageobjects/login.page";
import objectPage from "../pageobjects/object.page";
import chai from "chai";
describe("Computer DataBase TestSuite", () => {
  it("should pass for heading and title same", async () => {
    // for opening the page
    await LoginPage.open("computers");

    // for getting the title
    const title = await browser.getTitle();

    // for getting the header of the page
    const header = await objectPage.header.getText();

    // expect creteria to check header and title equal or not
    chai.expect(title).not.to.equal(header);
  });

  it("should pass for user to see computer assests", async () => {
    let tableHeaderText = [
      "Computer name",
      "Introduced",
      "Discontinued",
      "Company",
    ];

    // expect criteria computer add button existing
    await expect(objectPage.btnAddComputer).toExist();

    // expect criteria filter button exist
    await expect(objectPage.btnFilter).toExist();

    // getting header text of the table
    const tableHeader = await objectPage.table.tableHeader;

    for (let i = 0; i < tableHeader.length; i++) {
      // getting text table header
      let a = await tableHeader[i].getText();

      // expect criteria to check table header text
      chai.expect(a).to.equal(tableHeaderText[i]);
    }
  });
});
