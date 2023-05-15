//malin 
const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();
    /*
   As a customer I want to compare two items to eachother
   */
describe('Compare two different running shorts to eachother', () => {
    context('Search for shorts, filter on runners and add two styles to compare', () => {
        it('I should get a camparison of the two styles of shorts', async () => {
                
                const driver = await new Builder().forBrowser('firefox').build();  

            try {
                 // store
                 await driver.get('https://magento.softwaretestingboard.com/')

                 // search
                 await driver.findElement(By.id('search')).sendKeys(' running shorts', Key.ENTER);

                 // add compare
                 await driver.wait(findElement(By.css('.action.tocompare'[0])), 10000);
                 await driver.findElement(By.css('action.to.compare'[0])).click();

                 /*await driver.wait(findElement(By.css('.action.to.compare'[0])), 10000);
                 await driver.findElement(By.css('.action.to.compare'[0])).click();

                 await driver.wait(findElement(By.css('a[href$="/artemis-running-short.html"]')), 10000);
                 await driver.findElement(By.css('a[href$="/artemis-running-short.html')).click();

                 await driver.wait(findElement(By.css('.action.to.compare'[0])), 10000);
                 await driver.findElement(By.css('.action.to.compare'[0])).click();*/


                 // compare

                 //assert

                }finally {
                    //await driver.quit();
                    }
            });
        });
    
    });
        