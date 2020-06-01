const elementUtil = require("../util/elementUtil")
const constantData = require("../constants")

class HomePage{

    get header(){return $("//h1[text()='Sales Dashboard']")}
    get serchElement(){return $('#navSearch-input')}
    get accountInfo(){return $('#account-menu')}
    get accountUserName(){return $("//div[text()='Shobhit Shobhit']")}
    get signOut(){return $('=Sign out')}
    getPageTitle(){
        
        return elementUtil.doGetPageTitle(constantData.HOME_PAGE_TITLE);

    }


    doClickOnSearch(){
        return elementUtil.doClick(this.serchElement)
    }

    doClickAccountInfo(){
        return elementUtil.doClick(this.accountInfo)
    }
    getHeaderText(){
       return  elementUtil.doGetText(this.header);
    }

    getAccountName(){
        return elementUtil.doGetText(this.accountUserName)
    }
    doSignOut(){
        elementUtil.doScrollToElement(this.signOut)
        return elementUtil.doClick(this.signOut)
    }
}

module.exports = new HomePage();