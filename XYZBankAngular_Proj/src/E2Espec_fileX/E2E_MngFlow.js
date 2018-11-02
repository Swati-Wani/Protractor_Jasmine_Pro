var data = require(process.cwd()+'/dataXYZ.json');  //as there is less data I've used just one file, good practice is to use diff files
var loginPage=require('../PageRepositoryCust/loginPage.js');

describe('BankXYZ Customer', function(){
	it('e2e flowcust', function(){
		//browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.get(data.URL);
		var managerPage=loginPage.clickMngLoginBtn();
		browser.sleep(5000);
		var addCustPage=managerPage.clickAddCust();
		addCustPage.enterFistNm(data.Manager.fname);
		addCustPage.enterLastNm(data.Manager.lname);
		addCustPage.enterPostCode(data.Manager.pcode);
		addCustPage.clickCust();
		browser.switchTo().alert().accept();
		

		
		
	})
})