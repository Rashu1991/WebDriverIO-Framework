const loginPage = require("../pages/login.page")
const configData = require("../config")
const constantData = require("../constants")
const assert = require('assert')

describe("loginpage feature test",function(){
    this.retries(2) // This is mocha feature which will run any failed test cases number of times as mentioned
    // in the parameter
    it("verify login page title",function(){

        browser.url('https://app.hubspot.com/login')

        browser.maximizeWindow(); // to maximize the window
        const title=loginPage.getPageTitle();
        console.log('Login page title is :',title)
        assert.equal(constantData.LOGIN_PAGE_TITLE, title, 'title is not found')

    })

    it("verify sign up link",function(){
        assert.equal(true,loginPage.isSignUpLinkExist(),'sign up link not visible')
    })

    it("verify login", function(){
        loginPage.doLogin(configData.username,configData.password)
    })
})