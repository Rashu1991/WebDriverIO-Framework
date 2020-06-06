const contactPage = require("../pages/contact.page")
const loginPage = require("../pages/login.page")
const homePage =  require("../pages/home.page")
const configData = require("../config")
const constantData = require("../constants")
const contact_Data = require("../contactData")
const assert = require('assert')

describe("contact feature test",function(){
    it("verify click on create contact",function(){

        browser.url('/')
        browser.maximizeWindow();
        loginPage.doLogin(configData.username,configData.password)
        homePage.doClickOnContact
        contactPage.doClickContact_ContactDropDown();
        const contact_Title=contactPage.getPageTitle();
        assert.equal(contact_Title,constantData.CONTACT_PAGE_TITLE,'contact page title invalid')
    })

   
    it("create contact test",function(){
        assert.equal(contactPage.isCreateContactBtnEnabled(),true,'button is disabled')
        contactPage.doClickOnCreateContact();
        contactPage.doCreateContactEnterDetails();
        assert.equal(contactPage.doClickCreateContactButton(),contact_Data.email,'record not created');


    }) 

})