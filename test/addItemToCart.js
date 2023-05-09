// Nicholas Test

const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();


/* 
    As a customer, 
    I would like to add items to the cart, 
    so I can see the total price before checking out.
*/

describe('Add an item to the cart', () => {
    context('I add an item to the cart', () => {
        it('I can see the total price', async () =>{
            const driver = await new Builder().forBrowser('firefox').build();

            await driver.get('https://magento.softwaretestingboard.com');
        });
    });
});