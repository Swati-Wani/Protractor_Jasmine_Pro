var Jasmine2HtmlReporter= require('protractor-jasmine2-html-reporter');
exports.config = {
         directConnect: true,
		//seleniumAddress: 'http://localhost:4444/wd/hub',
         
  
  capabilities: {
        //'browserName': 'chrome'
    	'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  specs : // it will not have curly bracket
	
	// ['./WithoutFrameSEQ.js'],
	[ './src/E2Espec_fileX/E2E_CustFlow.js' ],
	// ['./src/E2Espec_fileX/E2E_MngFlow.js'],

   onPrepare : function() {
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'target/screenshots'
		// takeScreenshots:true, //no need of adding this as by default it is
		// true add if u want to make it false
		// takeScreenshotsOnlyOnfailure: true
		}));
	},
	// Options to be passed to Jasmine.

	//	  suites:  {                  // to all particular group , we have to edit commands in 
	//		                           //runMe.bat batch file or give proper cmd commands like 
	//	                              //cd 'to conf.js's folder' and...protractor conf.js --smoke
	//		  functional:['./src/Functional/example_spec.js', './src/Functional/calculator.js'],
	//		  regresion:['./src/Regression/*.js'],    //or u can give ./src/Regression/calculatorByUserDifinedfn.js
	//		  smoke:['./src/Smoke/*.js'],
	//		  all:['./src/Functional/*.js', './src/Smoke/*.js', './src/Regression/*.js']
	//	  },

	jasmineNodeOpts : {
		defaultTimeoutInterval : 70000
	}
};
