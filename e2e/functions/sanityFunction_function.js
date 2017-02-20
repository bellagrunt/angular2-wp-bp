"use strict";
//" wd " ( WebDriver ) and " baseUrl " are set globally by Protractor
var webdriver = require('selenium-webdriver');
var sanityPage = {
	get : function() {
		appPage.get( "http://localhost:3002/" );
	},

	// validating home page

	clickOnAbout : function() {
		element( by.className( "about" ) ).click();
	},

	// validating contact page

	validateContact : function() {
		return element( by.className( "contact" ) ).getText();
	},

	// validating clicking on multiple pages ----- >>

	// validating about page
	clickOnAbout : function() {
		element( by.className( "about" ) ).click();
	},

	validateAbout : function() {
		return element( by.css( "h1" ) ).getText();
	},

};

module.exports = sanityPage;
