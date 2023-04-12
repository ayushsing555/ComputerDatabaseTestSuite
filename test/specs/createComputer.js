import LoginPage from "../pageobjects/login.page";
import newComputerPage from "../pageobjects/newComputer.page";
import ObjectPage from "../pageobjects/object.page";
import chai from "chai";
describe("Computer database TestSuite", () => {
  it("should pass for creating the computer", async () => {
    // opening the page
    await LoginPage.open("computers");

    // clicking on the addcomputer button
    await ObjectPage.addCmputer();

    // for getting a url
    const url = await browser.getUrl();

    chai
      .expect(url)
      .to.equal("https://computer-database.gatling.io/computers/new");

    await newComputerPage.selectBox();

    // selecting option in list
    const a = await newComputerPage.selectOptionList;

    for (let i = 0; i < a.length; i++) {
      let option = await a[i].getText();
      if (option == "IBM") {
        await a[i].click();
      }
    }

    // for adding computer
    await newComputerPage.addComputer("Test", "1999-12-11", "2001-12-11");

    // switching the window
    await browser.switchWindow(
      "https://computer-database.gatling.io/computers"
    );

    // expect criteria of checking new computer is created or not.
    await expect(ObjectPage.confirmMessage).toHaveTextContaining("Test");
  });
});
