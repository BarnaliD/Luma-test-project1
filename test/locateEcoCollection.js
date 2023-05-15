// Amber's Test

const { Builder, By, until } = require('selenium-webdriver');
const should = require('chai').should();
const assert = require('chai').assert;

/* 
    As a serious yoga enthusiast, I would like to purchase yoga wear that 
    is both fashionable and provides high performance so that 
    I can stay dry and move with ease/comfort.
*/

describe('Locate the Eco-Friendly collection on the Luma Dermostore', () => {
    context('I click on the link that will take me to the collection', async () => {
        it('I should be able to view the entire Eco-Friendly collection', async () => {
            const driver = await new Builder().forBrowser('firefox').build();
            try {
                await driver.get('https://magento.softwaretestingboard.com');

                // Go to Eco-Friendly Collection
                await driver.wait(until.elementLocated(By.css('.home-eco')), 10000);
                await driver.findElement(By.css('.home-eco')).click();

                await driver.sleep(3000);

                // Confirm that link routes to the Eco-Friendly Collection

                let expectedURL = 'https://magento.softwaretestingboard.com/collections/eco-friendly.html'

                let current_url = await driver.getCurrentUrl();

                assert.strictEqual(current_url, expectedURL);

            } finally {
                await driver.quit();
            }
        })
    })
})

