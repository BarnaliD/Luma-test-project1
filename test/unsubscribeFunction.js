/* Swapnal*/

const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();
require('dotenv').config();

//Login data
let user = process.env.USER;
let pass = process.env.PASS


/* 
    As a customer I want 
    to check the status of my newsletter subscription 
    so that I can choose to subscribe or unsubscribe the newsletter facility .
*/

describe.only('Check the newsletter subscription status', () => {

    context('I check the newsletter subscription status', () => {

        it('I should be able to subscribe or unscribe the newsletter', async () => {

            const driver = await new Builder().forBrowser('firefox').build();

            try {

                //Go to magento website
                await driver.get('https://magento.softwaretestingboard.com/');

                await driver.findElement(By.css('.authorization-link > a:nth-child(1')).click();

                // Get the form and send keys
                await driver.wait(until.elementLocated(By.id('email')), 10000);

                //Send key
                await driver.findElement(By.id('email')).sendKeys(user);
                await driver.findElement(By.id('pass')).sendKeys(pass);

                // Click login button
                await driver.findElement(By.css('#send2')).click();

                // Implicit wait to allow site to load
                await driver.sleep(1000);

                // Get to our profile
                await driver.wait(until.elementLocated(By.css('.action.switch')), 20000);
                await driver.findElement(By.css('.action.switch')).click();

                await driver.wait(until.elementLocated(By.css('a[href$="/customer/account/"]')), 10000);
                await driver.findElement(By.css('a[href$="/customer/account/"]')).click();
                
                // Find Edit subscription element
                await driver.wait(until.elementLocated(By.css('a[href="https://magento.softwaretestingboard.com/newsletter/manage/"]')), 10000);
                await driver.findElement(By.css('a[href="https://magento.softwaretestingboard.com/newsletter/manage/"]')).click();
                
                // Find checkbox
                await driver.wait(until.elementLocated(By.css('#subscription.checkbox')), 10000);
                
                let checkbox = await driver.findElement(By.css('#subscription.checkbox'));
                
                // check status of checkbox
                checkbox.isSelected().then(isSelected => {
                    if (isSelected) {
                        //console.log('Checkbox is checked.');
                        checkbox.click();
                        //console.log('I clicked and unchecked');
                        performSave();
                        unsubscribed();

                    } else {
                        //console.log('Checkbox is not checked.');
                        checkbox.click();
                        //console.log('I clicked and checked');
                        performSave();
                        subscribed();
                    }

                    async function performSave() {
                        // Save button
                        await driver.wait(until.elementLocated(By.css('.action.save.primary')), 10000);
                        await driver.findElement(By.css('.action.save.primary')).click();
                    }

                    async function subscribed(){
                        await driver.wait(until.elementLocated(By.css('.message-success.success.message')),10000);
                        // Find message
                        let successLebel = await driver.findElement(By.css('.message-success.success.message'));
                        // Extract text
                        let successLebelText = await successLebel.getText();

                        successLebelText.should.equal('We have saved your subscription.');
                    }

                    async function unsubscribed(){
                        await driver.wait(until.elementLocated(By.css('.message-success.success.message')),10000);
                        // Find message
                        let successLebel = await driver.findElement(By.css('.message-success.success.message'));
                        // Extract text
                        let successLebelText = await successLebel.getText();

                        successLebelText.should.equal('We have removed your newsletter subscription.');
                    }
                });

            } finally {
                await driver.sleep(5000);
                await driver.quit();
            }

        });
    });
});
