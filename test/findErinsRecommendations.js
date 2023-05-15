//Malin 


const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();
    /*
   As a customer I want to find a a product 
   that Erin recommends 
   */
describe('Go to womens t-shirts and find the ones Erin recomends', () => {
    context('I go to women, chose t-shirts and filter to only show Erins recomendations', () => {
        it('I see all t-shirts recomended by Erin', async () => {
                
                const driver = await new Builder().forBrowser('firefox').build();  

            try {
                 // store
                 await driver.get('https://magento.softwaretestingboard.com/')
                
                 // womans items  
                 await driver.wait(until.elementLocated(By.id('ui-id-4')), 10000);
                 await driver.findElement(By.id('ui-id-4')).click();
                 console.log('wrks1');

                 // t-shirts
                 await driver.wait(until.elementLocated(By.css('.more.icon')), 10000);
                 await driver.findElement(By.css('.more.icon')).click();
                 console.log('wrks2');

                 //Erins recomendations-filter
                 await driver.wait(until.elementLocated(By.css('#narrow-by-list.filter-options>div:nth-child(7)')), 1000);
                 await driver.findElement(By.css('#narrow-by-list.filter-options>div:nth-child(7)')).click();
                 console.log('wrks3');

                 //yes
                 //await

                 //assert

            } finally {
                await driver.quit();
                }
        });
    });

});
    
