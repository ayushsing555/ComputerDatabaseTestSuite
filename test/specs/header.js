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
});
