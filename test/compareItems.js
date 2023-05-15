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

                 // filter

                 // add compare

                 // compare

                 //assert

                }finally {
                    await driver.quit();
                    }
            });
        });
    
    });
        