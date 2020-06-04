const elementUtil = require("../util/elementUtil")
const constantData = require("../constants")

class HomePage{

    get header(){return $("//h1[text()='Sales Dashboard']")}
    get serchElement(){return $('#navSearch-input')}
    get accountInfo(){return $('#account-menu')}
    get accountUserName(){return $("//div[text()='Shobhit Shobhit']")}
    get signOut(){return $('=Sign out')}
    get contact(){return $('#nav-primary-contacts-branch')}
    get contactDropDown_Contact(){return $('#nav-secondary-contacts')}
    
    getPageTitle(){
        
        return elementUtil.doGetPageTitle(constantData.HOME_PAGE_TITLE);
    }


    doClickOnSearch(){
        elementUtil.doClick(this.serchElement)
        return elementUtil.doIsEnabled(this.serchElement)
    }

    doClickAccountInfo(){
        elementUtil.doClick(this.accountInfo)
        return elementUtil.doIsEnabled(this.accountInfo)

    }

    getHeaderText(){
       return  elementUtil.doGetText(this.header);
    }

    getAccountName(){
        return elementUtil.doGetText(this.accountUserName)
    }
    doSignOut(){
        elementUtil.doClick(this.accountInfo)
        elementUtil.doScrollToElement(this.signOut)
        elementUtil.doClick(this.signOut)
    }

    doClickOnContact(){
        elementUtil.doClick(this.contact)
        return elementUtil.doIsEnabled(this.contact)
    }


}

module.exports = new HomePage();