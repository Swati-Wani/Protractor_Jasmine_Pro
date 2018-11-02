describe('customer', function(){
	it('selectCustomer', function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		element(by.buttonText('Customer Login')).click();
		element(by.model('custId')).click();  //dropdwn arrow
		
		/* select the'Harry potter option click */
		element.all(by.repeater("cust in Customers")).then(function(opt){   //simple repeater no web table... for this 
			                                                          // dropdown by.options was not there.we need to click drpdn arrao first to see options
			opt[1].click();
		
		
		})
       element(by.buttonText('Login')).click();   /* navigated to account page*/
		/* to validate web elements-- still remained */
		
		/*  validate accountPage after login customer*/
		var name = element(By.className("fontBig ng-binding")).getText();
		//var name=element(by.xpath("//span[text()='Harry Potter']")).getText();  //like webelement in selenium
		expect(name).toBe('Harry Potter');//though console doesn't show, text, this validation is correct
		//console.log(name); >>somehow its not giving expected output ..
		
		/* click on transaction button*/
		element(by.buttonText('Transactions')).click();
		/* validate transaction page empty*/
		
		element(by.buttonText('Back')).click();
		
		/*  select 1006 account no*/
		element.all(by.options('account for account in Accounts')).then(function(opt){
			opt[2].click();
		})
		browser.sleep(5000);
		/* click on deposit button*/
		element(by.buttonText('Deposit')).click();
		
		/*  enter 2000 in amount to be deposited box*/
		element(by.model('amount')).sendKeys(2000);
		browser.sleep(5000);
		element(by.className('btn btn-default')).click();
		browser.sleep(5000);
		
		
//		/*Validate balance 2000  */
//		var balance = element(by.xpath("//strong[text()='2000']")).getText();  //user generated xpath...
//		//var name=element(by.xpath("//span[text()='Harry Potter']")).getText();  //like webelement in selenium
//		expect(balance).toBe('2000');//though console doesn't show, text, this validation is correct
//		
//		
//		/* verify transaction table*/
//		var balanceTr= element(by.xpath("//tr[@id='anchor0']//td[2]")).getText();
//		expect(balanceTr).toBe('2000');
//		
		
		/* withdraw 2001*/
		element(by.buttonText('Withdrawl')).click();
		browser.sleep(5000);
		
		
		element(by.model('amount')).sendKeys(2001);
		browser.sleep(5000);
		element(by.className('btn btn-default')).click();
		browser.sleep(5000);
		
		/*  validate the error message*/
		var errMsg=element(by.xpath("//span[@class='error ng-binding']")).getText();
		expect(errMsg).toBe('Transaction Failed. You can not withdraw amount more than the balance.')
		
		/* withdraw 2000*/
		element(by.buttonText('Withdrawl')).click();
		browser.sleep(5000);
		
		
		element(by.model('amount')).sendKeys(2000);
		browser.sleep(5000);
		element(by.className('btn btn-default')).click();
		browser.sleep(5000);
		
		/* go to transaction  */
		element(by.buttonText('Transactions')).click();
		browser.sleep(7000);
		
	})
})
