var TestPage = require('../test/page-object/test_page')

describe('Demo Page', function(){
    var testPage

    beforeEach(function() {
        testPage = new TestPage()

        browser.ignoreSynchronization = true

        browser.get('https://sakshingp.github.io/assignment/login.html?wdsid=5226926ac8fccf44a88302db8802ee36&wdurl=http%3A%2F%2Flocalhost%3A4444%2Fwd%2Fhub')

    })

    afterEach(function() {

    })
    it('should load the correct URL', function() {
        expect(testPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(testPage.loginErrorMsg.getText()).toEqual('')

        expect(testPage.usernameFldLbl.isDisplayed()).toBe(true)
        expect(testPage.usernameFld.isDisplayed()).toBe(true)
        expect(testPage.usernameFld.getText()).toEqual('')


        expect(testPage.passwordFldLbl.isDisplayed()).toBe(true)
        expect(testPage.passwordFld.isDisplayed()).toBe(true)
        expect(testPage.passwordFld.getText()).toEqual('')


        expect(testPage.loginBtn.isDisplayed()).toBe(true)

    })

    it('should display error message when no email and password entered', function() {
        testPage.loginBtn.click()

        browser.sleep(5000)

        expect(testPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(testPage.loginErrorMsg.getText()).toEqual('Both Username and Password must be present')
    })

    it('should display error message when no password entered', function() {
        testPage.usernameFld.sendKeys('test@log.com')
        testPage.loginBtn.click()

        browser.sleep(5000)

        expect(testPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(testPage.loginErrorMsg.getText()).toEqual('password must be present')
    })

    it('should display error message when no email entered', function() {
        testPage.passwordFld.sendKeys('12345678')
        testPage.loginBtn.click()

        browser.sleep(5000)

        expect(testPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(testPage.loginErrorMsg.getText()).toEqual('username must be present')
        
    })

    it('should log use in', function() {
        testPage.usernameFld.sendKeys('test@log.com')
        testPage.passwordFld.sendKeys('12345678')
        testPage.loginBtn.click()

        browser.sleep(5000)
        
    })
})