//Barnali UserStories
const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();


/* 
    As a customer, 
    I would like to sort the item I chose by price, 
    so that I can see all the items in ascending order of their price.
*/
describe.only('Go to sale and select shop women sales',() => {
    context('I choose my size and then sort products by price ',() => {
        it('I can see products in required size and ascending order of prices on product page', async () => {
            const driver = await new Builder().forBrowser('firefox').build();

            try {
                await driver.get('https://magento.softwaretestingboard.com');
                
                //go to store
                await driver.wait(until.elementLocated(By.css('a[href$="/sale.html"]')),10000);
                await driver.findElement(By.css('a[href$="/sale.html"]')).click();
                //Go to women sales page
                await driver.wait(until.elementLocated(By.css('.more.button')),10000);
                await driver.findElement(By.css('.more.button')).click();
                await driver.sleep(10000);
                await driver.findElement(By.xpath("(//div[@class='filter-options-title'])[3]")).click();
               
                //Select size M
                await driver.wait(until.elementLocated(By.css('.swatch-option-link-layered>div[option-id="168"]')),10000);
                await driver.findElement(By.css('.swatch-option-link-layered>div[option-id="168"]')).click();
                 // Select the sorting option
                await driver.findElement(By.css('.sorter-options')).click();
                 //select sort by price
                await driver .wait(until.elementLocated(By.css('select#sorter.sorter-options option[value="price"]')),10000);
                await driver.findElement(By.css('select#sorter.sorter-options option[value="price"]')).click();
                await driver.sleep(10000);
                //assert
                await driver.wait(until.elementLocated(By.css('#product-price-1508')), 10000);
                const price = await driver.findElement(By.css('#product-price-1508')).getText();
                price.should.contain('$28.00');

            }finally {
                await driver.quit();
            }
        });
    });

});