var data = require(process.cwd()+'/dataXYZ.json');
var loginPage = function() {   //this is actually 'loginPage' object defination

//	element(by.buttonText('Customer Login')).click();
	var custLoginBtn = element(by.buttonText('Customer Login'));

	this.clickNext = function() {
		custLoginBtn.click();
		return require('./customerPage.js');
	}
	
	var mngrLoginBtn = element(by.buttonText('Bank Manager Login'));

	this.clickMngLoginBtn = function() {
		mngrLoginBtn.click();
		return require('process.cwd()+.src/PageRepositoryAccMngr/managerPage.js');
	}
}

module.exports = new loginPage();  //here we are creating loginPage object, which we will use in E2E flow file