import LoginPage from "../pageobjects/login.page.js";
import ObjectPage from "../pageobjects/object.page.js";
import chai from "chai";
describe("My Login application", () => {
  it("should pass for filtering computers", async () => {
    // for opening the page
    await LoginPage.open("computers");

    // for searching computers
    await ObjectPage.filterComputer("ace");

    // for getting the list of computers after filtering
    const a = await ObjectPage.computerNames;

    console.log(a.length + " ayush");
    // check each computer in the result
    for (let i = 0; i < a.length; i++) {
      // for getting name of computer in each row
      let computerName = await a[i].getText();

      // for converting in lowercase to match the searching
      computerName = computerName.toLowerCase();
      let b = computerName.indexOf("ace");

      // for expecting creteria
      chai.expect(b).not.to.equal(-1);
    }
  });
});
