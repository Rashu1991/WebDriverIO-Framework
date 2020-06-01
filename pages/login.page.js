const elementUtil = require("../util/elementUtil");
const constantData = require("../constants") 

class LoginPage{

    // page locators
    get username(){return $('#username')}

    get password(){return $('#password')}

    get loginBtn(){return $('#loginBtn')}

    get signUpLink(){return $('=Sign up')}

    // page actions
    getPageTitle(){
        
        return elementUtil.doGetPageTitle(constantData.LOGIN_PAGE_TITLE);
    }

    isSignUpLinkExist(){
        return elementUtil.doIsDisplayed(this.signUpLink);
    }

    doLogin(emailID,pwd){
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        elementUtil.doClick(this.loginBtn)
    }
}

module.exports = new LoginPage();