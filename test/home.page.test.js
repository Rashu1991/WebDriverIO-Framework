const loginPage = require("../pages/login.page")
const homePage =  require("../pages/home.page")
const configData = require("../config")
const constantData = require("../constants")
const assert = require('assert')

describe("home page feature test",function(){

    this.retries(2);
    it("verify home page title",function(){

        browser.url('/')
        browser.maximizeWindow();
        loginPage.doLogin(configData.username,configData.password)
        const title_homePage=homePage.getPageTitle();
        console.log('title of homepage',title_homePage)
        assert.equal(title_homePage,constantData.HOME_PAGE_TITLE,'title of home page is iinvalid')
    })

    it("verify home page header",function(){

        const header_homePage=homePage.getHeaderText();
        console.log('Header of home page',header_homePage)
        assert.equal(header_homePage,constantData.HOME_PAGE_HEADER)
    })

    it("verify click on search",function(){
        assert.equal(homePage.doClickOnSearch(),true,'not clicked on search');
        
    })

    it("verify account name ",function(){
        assert.equal(homePage.doClickAccountInfo(),true,'not clicked on account info');
        const accName=homePage.getAccountName();
        console.log('Account name',accName)
        assert.equal(accName,constantData.HOME_PAGE_ACC_NAME,'acc name invalid');
    })

    it("verify sign out",function(){
        
        if(homePage.doClickAccountInfo()){
            assert.equal(homePage.doSignOut(),true,'not signed out of the application')
        }

    })

})