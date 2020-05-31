const homePage = require("../pages/home.page")
const loginPage = require("../pages/login.page")
const configData = require("../config")
const assert = require('assert')
const constantData = require("../constants")

describe("home page feature test",function(){

    this.retries(2)
    it("verify home page title",function(){

        browser.url('https://app.hubspot.com/login')
        browser.maximizeWindow();
        loginPage.doLogin(configData.username,configData.password)
        const title =homePage.getPageTitle();
        console.log('Home page title is', title)
        assert.equal(constantData.HOME_PAGE_TITLE,title,'title not found')

        }) 

        it("verify header homePage",function(){
            assert.equal(constantData.HOME_PAGE_HEADER,homePage.getHeaderText(),'home page header is missing')
        })

})