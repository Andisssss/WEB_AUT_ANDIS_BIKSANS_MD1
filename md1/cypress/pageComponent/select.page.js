import basePage from "./base.page";

class selectPage extends basePage{

    static get url(){
        return "/selectable";
    }

    static get selectGridButton(){
        return cy.get("#demo-tab-grid");
    }

    static get numberButtons(){
        return cy.get(".list-group-item");
    }

    static get number1Button(){
        return this.numberButtons.contains("One");
    }

    static get number2Button(){
        return this.numberButtons.contains("Two");
    }

    static get number3Button(){
        return this.numberButtons.contains("Three");
    }

    static get number4Button(){
        return this.numberButtons.contains("Four");
    }

    static get number5Button(){
        return this.numberButtons.contains("Five");
    }

    static get number6Button(){
        return this.numberButtons.contains("Six");
    }

    static get number7Button(){
        return this.numberButtons.contains("Seven");
    }

    static get number8Button(){
        return this.numberButtons.contains("Eight");
    }
    
    static get number9Button(){
        return this.numberButtons.contains("Nine");
    }
}

export default selectPage;