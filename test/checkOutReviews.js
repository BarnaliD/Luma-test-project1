// Nicholas Test

const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();

/*
    As a customer, 
    I would like to read the reviews of a product, 
    so I can see what other people think about the product before I purchase it.
*/

describe.only('Reading reviews', () => {
    context('I click on reviews', () => {
        it('I can see the reviews of a product', async () => {
            const driver = await new Builder().forBrowser('firefox').build();
            const actions = driver.actions();

            try {
                await driver.get('https://magento.softwaretestingboard.com/');
                await driver.wait(until.elementLocated(By.css('.ui-menu-icon.ui-icon.ui-icon-carat-1-e')), 10000);
                const subMenus = await driver.findElements(By.css('.ui-menu-icon.ui-icon.ui-icon-carat-1-e'));
                const gearSubMenu = await subMenus[6];
                await actions.move({duration: 1000, origin: gearSubMenu}).perform();
                await driver.wait(until.elementLocated(By.id('ui-id-27')), 10000);
                await driver.findElement(By.id('ui-id-27')).click();
                await driver.wait(until.elementLocated(By.css('.product-item-info')), 10000);
                const watches = await driver.findElements(By.css('.product-item-info'));
                await watches[3].click();
                await driver.wait(until.elementLocated(By.id('tab-label-reviews-title')), 10000);
                await driver.findElement(By.id('tab-label-reviews-title')).click();
                await driver.wait(until.elementLocated(By.id('review-form')), 10000);
                driver.wait(until.elementLocated(By.id('review-form')), 10000)
                const reviewForm = await driver.findElement(By.id('review-form')).getText();
                reviewForm.should.contain('You\'re reviewing:');
            } finally {
                await driver.quit();
            }
        });
    });
});