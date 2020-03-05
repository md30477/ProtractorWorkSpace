describe('Protractor Demo Application', function() { 
it('should multiply two integers', function() { 
browser.get('http://juliemr.github.io/protractor-demo/'); 
element(by.model('first')).sendKeys(2); 
element(by.model('second')).sendKeys(7); 
element(by.model('operator')).click(); 
element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click(); 
element(by.id('gobutton')).click(); 
//expect(element(by.binding('latest')).getText()).toEqual('21'); 
//Incorrect expectation //
expect(element(by.binding('latest')).getText()).toEqual('14'); 
//Correct expectation 
}); 
});