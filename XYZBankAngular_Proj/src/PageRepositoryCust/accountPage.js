var data = require(process.cwd()+'/dataXYZ.json');
var accountPage = function() {

	/*  operations on account page  */
	//select account no
	//click transaction>>return transaction listTx pg
	//click deposit...Enter deposit...click ok
	///click widraw...enter amnt.. ok
	
	/* so in E2E i will first get br.
	 *  ..call logInPage.custBTNclk()...this returns customerPage
	 *  then call customerPage.clickDrpDn()...call..customerPage.selectId()
	 *  then customerPage.clickLoginBTN()...this returns accountPage(return require(..))
	 *  call accountPage.validateData()>>"welcome HarryPotter" ...validateData fn will include expect()
	 *  call accountPage.clickTransactionLnk()...validate empty
	 */
	
//	/*   validate accountPage after login customer */
//		var name = element(By.className("fontBig ng-binding")).getText();
//		//var name=element(by.xpath("//span[text()='Harry Potter']")).getText();  //like webelement in selenium
//		expect(name).toBe('Harry Potter');//though console doesn't show, text, this validation is correct
//		//console.log(name); >>somehow its not giving expected output ..
//		
//		/* click on transaction button  */
//		element(by.buttonText('Transactions')).click();
//		/* validate transaction page empty*/
//		
//		element(by.buttonText('Back')).click();
//		
//		/*  select 1006 account no*/
//		element.all(by.options('account for account in Accounts')).then(function(opt){
//			opt[2].click();
//		})
//		browser.sleep(5000);
//		/* click on deposit button*/
//		element(by.buttonText('Deposit')).click();
//		
//		/*  enter 2000 in amount to be deposited box*/
//		element(by.model('amount')).sendKeys(2000);
//		browser.sleep(5000);
//		element(by.className('btn btn-default')).click();
//		browser.sleep(5000);
//		
//		
////		/*Validate balance 2000  */
////		var balance = element(by.xpath("//strong[text()='2000']")).getText();  //user generated xpath...
////		//var name=element(by.xpath("//span[text()='Harry Potter']")).getText();  //like webelement in selenium
////		expect(balance).toBe('2000');//though console doesn't show, text, this validation is correct
////		
////		
////		/* verify transaction table*/
////		var balanceTr= element(by.xpath("//tr[@id='anchor0']//td[2]")).getText();
////		expect(balanceTr).toBe('2000');
////		
//		
//		/* withdraw 2001*/
//		element(by.buttonText('Withdrawl')).click();
//		browser.sleep(5000);
//		
//		
//		element(by.model('amount')).sendKeys(2001);
//		browser.sleep(5000);
//		element(by.className('btn btn-default')).click();
//		browser.sleep(5000);
//		
//		/*  validate the error message*/
//		var errMsg=element(by.xpath("//span[@class='error ng-binding']")).getText();
//		expect(errMsg).toBe('Transaction Failed. You can not withdraw amount more than the balance.')
//		
//		/* withdraw 2000*/
//		element(by.buttonText('Withdrawl')).click();
//		browser.sleep(5000);
//		
//		
//		element(by.model('amount')).sendKeys(2000);
//		browser.sleep(5000);
//		element(by.className('btn btn-default')).click();
//		browser.sleep(5000);
//		
//		/* go to transaction  */
//		element(by.buttonText('Transactions')).click();
//		browser.sleep(7000);
//		*/
	
	/* validate accountPage after login customer */
	var name = element(By.className("fontBig ng-binding")).getText();
	this.validateCust = function() {
		expect(name).toBe('Harry Potter');
		return this;
	}

	/* select customer id dropdn */
	var custAccnts = element.all(by.options('account for account in Accounts'));
	this.selectId = function() {
		custAccnts.then(function(opt) {
			opt[2].click();
		});
		return this;
	}

	/* click on deposit button */
	var deposit = element(by.buttonText('Deposit'));
	this.clickDeposit = function() {
		deposit.click();
		return this;
	}

	/* enter 2000 in amount to be deposited box */
	var depositAmt = element(by.model('amount'));
	this.enterDeposit = function(amt) {
		depositAmt.sendKeys(amt);
	//	return this;
	}

	/* click on deposit button*/
	var depositBtn = element(by.className('btn btn-default'));
	this.clickDepositBtn = function() {
		depositBtn.click();
		return this;
	}

//	/*  validate balance value displayed on accntPage*/
//	var balText = element(by.xpath("//strong[text()='2000']")).getText();
//	this.validateBal = function() {
//		expect(balText).toBe('2000');
//		return this;
//	}
//	
	
	
}

module.exports = new accountPage();