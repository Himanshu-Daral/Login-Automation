var TestPage = function() {



}
TestPage.prototype = Object.create({}, {
    usernameFldLbl: {get: function() {return element(by.css('body > div > div > form > div:nth-child(1) > label') ) } },
    usernameFld: {get: function() {return element(by.id('username') ) } },
    passwordFldLbl: {get: function() {return element(by.css('body > div > div > form > div:nth-child(2) > label') ) } },
    passwordFld: {get: function() {return element(by.id('password') ) } },
    loginBtn: {get: function() {return element(by.id('log-in')) } },
    loginErrorMsg: {get: function() {return element(by.id('random_id_5')) } },
    

})

module.exports = TestPage