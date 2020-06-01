class ElementUtil{

    doClick(element){
        element.waitForDisplayed();
        element.click();
        return true;
    }

    doSetValue(element,value){
        element.waitForDisplayed();
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        },10000,'title is not displayed after the given time')
        return browser.getTitle();
    }

    doIsDisplayed(element){

        element.waitForDisplayed();
        return element.isDisplayed();
    }
    doScrollToElement(element){
        element.waitForDisplayed();
        element.scrollIntoView();
    }
}

module.exports = new ElementUtil();