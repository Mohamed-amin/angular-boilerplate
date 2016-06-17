'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!');
    });
    /**
     * getting that element text to take it around through tests
     */
    var elmFromResults; 
    var elmFromSaved;
    
    it('First element in place ', function() {
      expect(element.all(by.css('.results li')).first().getText().then((txt)=>{elmFromResults = txt})).
        toEqual(elmFromResults);
    });

   it('Move the property to saved properties and it should be on top', function() {
      element.all(by.css('.results li .btn')).first().click()
      expect(element.all(by.css('.saved li')).first().getText()).
        toEqual(elmFromResults);
    });

   it('Move the property from saved to results wwill be bottom', function() {
      element.all(by.css('.saved li .btn')).first().click()
      expect(element.all(by.css('.results li')).last().getText().then((txt)=>{ elmFromSaved = txt})).
        toEqual(elmFromSaved);
    });

  });
});
