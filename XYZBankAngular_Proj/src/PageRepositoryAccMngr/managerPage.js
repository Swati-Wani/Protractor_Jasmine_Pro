var data = require(process.cwd()+'/dataXYZ.json');
var managerPage = function() {
	


	var addCustBtn = element(by.buttonText('Add Customer'));
	var openAcc = element(by.buttonText('Open Account'));
	var cust = element(by.buttonText('Customers'));
	
	
	
	this.clickAddCust = function() {
		addCustBtn.click();
		//return require('./addCustPage.js');
	}
	
	this.clickOpenAcc = function() {
		openAcc.click();
		//return require('./openAccountPage.js');
	}
	
	
	this.clickCust = function() {
		cust.click();
		//return require('./custListPage.js');
	}
	
	
	
	
	
}	
module.exports = new managerPage();