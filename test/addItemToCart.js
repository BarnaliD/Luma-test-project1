// Nicholas Test

const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();


/* 
    As a customer, 
    I would like to add items to the cart, 
    so I can see the total price before checking out.
*/

describe.only('Add an item to the cart', () => {
    context('I press add to cart', () => {
        it('I can see the total price of all items added to the cart', async () =>{
            const driver = await new Builder().forBrowser('firefox').build();
            try {
                await driver.get('https://magento.softwaretestingboard.com');
                await driver.findElement(By.id('search')).sendKeys('pants', Key.ENTER);
                await driver.sleep(2000);
                await driver.wait(until.elementLocated(By.css('.product-item-info')), 10000);
                await driver.findElement(By.css('.product-item-info')).click();
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-175')), 10000);
                await driver.findElement(By.id('option-label-size-143-item-175')).click();
                await driver.findElement(By.id('option-label-color-93-item-49')).click();
                await driver.wait(until.elementLocated(By.id('product-addtocart-button')), 10000);
                await driver.findElement(By.id('product-addtocart-button')).click();
                await driver.sleep(3000);
                await driver.wait(until.elementLocated(By.css('.action.showcart')), 10000);
                await driver.findElement(By.css('.action.showcart')).click();
                await driver.wait(until.elementLocated(By.css('.price:first-child')), 10000);
                const price = await driver.findElement(By.css('.price:first-child')).getText();
                price.should.contain('$35.00');
                
            } finally {
                await driver.quit();
            }
            
        });
    });
});