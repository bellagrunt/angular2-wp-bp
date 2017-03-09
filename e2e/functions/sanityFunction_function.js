"use strict";
//" wd " ( WebDriver ) and " baseUrl " are set globally by Protractor
var webdriver = require('selenium-webdriver');
var sanityPage = {
	get : function() {
		appPage.get( "http://localhost:4200" );
	},

	// validating home page

	clickOnHome : function() {
		element( by.className( "home" ) ).click();
	},

	validateHome : function() {
		return element( by.css( "h1" ) ).getText();
	},

	// validating contact page

	validateContact : function() {
		return element( by.className( "contact" ) ).getText();
	},

	// validating clicking on multiple pages ----- >>

	// validating about page
	clickOnAbout : function() {
		element( by.className( "about-template" ) ).click();
	},

	validateAbout : function() {
		return element( by.css( "h1" ) ).getText();
	},

};

module.exports = sanityPage;
