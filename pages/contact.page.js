const elementUtil = require("../util/elementUtil")
const constantData = require("../constants")
const contact_Data = require("../contactData")

class ContactPage{

    get contact(){return $('#nav-primary-contacts-branch')}
    get contactDropDown_Contact(){return $('#nav-secondary-contacts')}
    get createContact(){return $("//div//button[@data-onboarding='new-object-button']")}
    get createContactEmail(){return $("//div/input[@data-field='email']")}
    get createContactFirstName(){return $("//div/input[@data-field='firstname']")}
    get createContactLastName(){return $("//div/input[@data-field='lastname']")}
    get createContactJobTitle(){return $("//div/input[@data-field='jobtitle']")}
    get createContactPhoneNumber9(){return $("//div/input[@data-field='phone']")}
    get createContactClose(){return $("//div[@data-action='close']")}
    get createContactHeader(){return $("//div//h3[text()='Create contact']")}
    get createContactButton(){return $$("//li/child::button")}
    get getEmailOfContact(){return $$("//tbody/tr/td[3]")}

    getPageTitle(){
        
        return elementUtil.doGetPageTitle(constantData.CONTACT_PAGE_TITLE);
    }

    doClickContact_ContactDropDown(){
        elementUtil.doClick(this.contact)
        elementUtil.doMoveToElement(this.contactDropDown_Contact)
        elementUtil.doClick(this.contactDropDown_Contact)
    }
    
    isCreateContactBtnEnabled(){
        return elementUtil.doIsEnabled(this.createContact)
    }

    doClickOnCreateContact(){
        elementUtil.doClick(this.createContact)
    }

    doCreateContactEnterDetails(){
        elementUtil.doSetValue(this.createContactEmail,contact_Data.email)
        elementUtil.doSetValue(this.createContactFirstName,contact_Data.firstName)
        elementUtil.doSetValue(this.createContactLastName,contact_Data.lastName)
        elementUtil.doSetValue(this.createContactJobTitle,contact_Data.jobTitle)
        elementUtil.doSetValue(this.createContactJobTitle,contact_Data.phoneNumber)
    }

    doClickCreateContactClose(){
        elementUtil.doClick(this.createContactClose)
    }

    dogetHeaderCreateContact(){
        return elementUtil.doGetText(this.createContactHeader)
    }

    doClickCreateContactButton(){
        
            elementUtil.doClick(this.createContactButton[1])
            for(let i=0;i<this.getEmailOfContact.length;i++){
            if(elementUtil.doGetText(this.getEmailOfContact[i])===(contact_Data.email)){
                return elementUtil.doGetText(this.getEmailOfContact[i])
            }
            }

        }
    }

module.exports = new ContactPage();