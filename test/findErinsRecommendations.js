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
                
                 // Go to womans items  
                 await driver.wait(until.elementLocated(By.id('ui-id-4')), 10000);  
                 await driver.findElement(By.id('ui-id-4')).click();
                 console.log('wrks1');

                 // Go to t-shirts
                 await driver.wait(until.elementLocated(By.css('.more.icon')), 10000);
                 await driver.findElement(By.css('.more.icon')).click();
                 console.log('wrks2');

                 // Expand Erins recomendations-filter
                 await driver.wait(until.elementLocated(By.css('.block-content.filter-content')), 10000);
                 //await driver.sleep(10000);
                 await driver.findElement(By.xpath("(//div[@class='filter-options-title'])[8]")).click();
                 console.log('wrks3');

                 // Choose yes
                 await driver.wait(until.elementLocated(By.css('a[href$="/women/tops-women/tees-women.html?erin_recommends=1"]')), 10000);
                 await driver.findElement(By.css('a[href$="/women/tops-women/tees-women.html?erin_recommends=1"]')).click();
                 console.log('wrks4');

                 // Assert
                 await driver.wait(until.elementLocated(By.css('.product-item:first-child')), 10000);
                 const product = await driver.findElement(By.css('.product-item:first-child'));

                 let productTitle = await product.findElement(By.css('.product-item-link'));
                 let productTitleText = await productTitle.getText();

                 productTitleText.should.equal('Diva Gym Tee');         

                } finally {
                await driver.quit();
                }
        });
    });

});
    
