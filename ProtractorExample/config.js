//var AllureReporter = require('jasmine-allure-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		// your config here
		framework: 'jasmine2',
		 onPrepare: function () {
			    var AllureReporter = require('jasmine-allure-reporter');
			    jasmine.getEnv().addReporter(new AllureReporter());
			    jasmine.getEnv().afterEach(function(done){
			      browser.takeScreenshot().then(function (png) {
			        allure.createAttachment('Screenshot', function () {
			          return new Buffer(png, 'base64')
			        }, 'image/png')();
			        done();
			      })
			    });
			  }
};