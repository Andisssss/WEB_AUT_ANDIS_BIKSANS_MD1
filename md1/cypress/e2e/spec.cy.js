import selectPage from "../pageComponent/select.page";


describe("DemoQA spec", () => {
  context("Selectable scenario", () => {
    beforeEach(() => {
      selectPage.visit();
    });

    it.only("testcase1", () =>{

      selectPage.selectGridButton.click();
      selectPage.number2Button.click();
      selectPage.number4Button.click();
      selectPage.number6Button.click();
      selectPage.number8Button.click();
      
      selectPage.number1Button.should("not.have.class", "active");
      selectPage.number3Button.should("not.have.class", "active");
      selectPage.number5Button.should("not.have.class", "active");
      selectPage.number7Button.should("not.have.class", "active");
      selectPage.number9Button.should("not.have.class", "active");
      
      selectPage.number2Button.should("have.class", "active");
      selectPage.number4Button.should("have.class", "active");
      selectPage.number6Button.should("have.class", "active");
      selectPage.number8Button.should("have.class", "active");


    });

  });
});