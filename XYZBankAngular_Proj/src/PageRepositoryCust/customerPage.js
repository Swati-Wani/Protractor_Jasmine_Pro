var data = require(process.cwd()+'/dataXYZ.json');
var customerPage = function() {

	

//	element(by.model('custId')).click();  //dropdwn arrow
//	
//	/* select the'Harry potter option click */
//	element.all(by.repeater("cust in Customers")).then(function(opt){   //simple repeater no web table... for this 
//		                                                          // dropdown by.options was not there.we need to click drpdn arrao first to see options
//		opt[1].click();
//	
//	
//	})
//   element(by.buttonText('Login')).click();   /* navigated to account page*/
	
	var custIdDrp= element(by.model('custId'));
	var custIdOpts = element.all(by.repeater("cust in Customers"));//array of all the dropdown options
	var LoginBtn = element(by.buttonText('Login'));
	
	this.clickDrp = function() {
		custIdDrp.click();
		return this;
	}
	
//	this.selectId = function() {
//		custIdOpts[1].click();
//		return this;
//	}
//	
	this.selectId = function() {
		custIdOpts.then(function(opt){
			opt[1].click();
		});
		return this;
	}
	
	
	
	this.clickLogin = function() {
		LoginBtn.click();
		return require('./accountPage.js');  //if you want to execute till here dont return anything
		
	}
	

}

module.exports = new customerPage();