var data = require(process.cwd()+'/dataXYZ.json');
var addCustPage = function() {
	


	var firstName = element(by.model('fName'));
	var lastName = element(by.model('lName'));
	var postcode = element(by.model('postCd'));	
	var addCustBtn = element(by.buttonText('Add Customer'));
	
	
	
	this.enterFistNm = function(fname) {
		firstName.sendKeys(fname);
		return this;
	}
	
	this.enterLastNm = function(lname) {
		lastName.sendKeys(lname);
		return this;
	}
	
	this.enterPostCode = function(code) {
		postcode.sendKeys(code);
		return this;
	}
	
	this.clickCust = function() {
		addCustBtn.click();  //poping alert so not returning anything
		
	}
	
	//in E2E we will use          browser.switchTo().alert().accept();
	
	
	
}	
module.exports = new addCustPage();