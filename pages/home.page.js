const elementUtil = require("../util/elementUtil")
const constantData = require("../constants")

class HomePage{

    get header(){
        return $("//h1[text()='Sales Dashboard']")
    }

    get serchElement(){
        return $('#navSearch-input')
    }

    get accountInfo(){
        return $('#account-menu')
    }

    getPageTitle(){
        
        return elementUtil.doGetPageTitle(constantData.HOME_PAGE_TITLE);

    }


    doClickOnSearch(){
        elementUtil.doClick(this.serchElement)
    }

    doClickAccountInfo(){
        elementUtil.doClick(this.accountInfo)
    }
    getHeaderText(){
       return  elementUtil.doGetText(this.header);
    }

}

module.exports = new HomePage();