 var data = require(process.cwd()+'/dataXYZ.json'); //mostly for all the pages used same data json file as there is very less data to pass
var loginPage=require('../PageRepositoryCust/loginPage.js');

/* so in E2E i will first get br.
 *  ..call logInPage.custBTNclk()...this returns customerPage
 *  then call customerPage.clickDrpDn()...call..customerPage.selectId()
 *  then customerPage.clickLoginBTN()...this returns accountPage(return require(..))
 *  call accountPage.validateData()>>"welcome HarryPotter" ...validateData fn will include expect()
 *  call accountPage.clickTransactionLnk()...validate empty
 *   
 */

describe('BankXYZ Customer', function(){
	it('e2e flowcust', function(){
		//browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.get(data.URL);
		var customerPage=loginPage.clickNext();
		browser.sleep(5000);
		customerPage.clickDrp();
		browser.sleep(5000);
		customerPage.selectId(); //For my ref:I forgot () so it was giving error element not scrolled into view
		browser.sleep(5000);
		var accountPage=customerPage.clickLogin();
		browser.sleep(3000);
		accountPage.validateCust();
		browser.sleep(3000);
		accountPage.selectId();
		browser.sleep(3000);
		accountPage.clickDeposit();
		browser.sleep(3000);
		accountPage.enterDeposit(data.deposit1);
		browser.sleep(3000);
		
		
	})
})







//describe('customer', function(){
//	it('selectCustomer', function(){
//	//	browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
//	//	element(by.buttonText('Customer Login')).click();
//		element.all(by.model("custId")).then(function(opt){
//			opt[1].click();
//		})
//	})
//})
