const { Builder, By, Key, until } = require('selenium-webdriver');
const { elementLocated } = require('selenium-webdriver/lib/until');
const should = require('chai').should();
require('dotenv').config();

let email = process.env.TESTUSER;

/*
    As a customer/potential customer, I would like to contact the company about inquiries
    and my thoughts through a web contact form.
*/

describe('Contact the company using the contact form', () => {
    context('I complete and submit the contact form', () => {
        it('I should receive a confirmation that my message was submitted', async () => {
            const driver = new Builder().forBrowser('firefox').build();
            try {
                // Go to the Luma Demostore
                await driver.get('https://magento.softwaretestingboard.com');

                // Locate and click the Contact Us link to get the form

                await driver.wait(until.elementLocated(By.css('a[href$="/contact/"]')), 10000);
                await driver.findElement(By.css('a[href$="/contact/"]')).click();

                await driver.sleep(3000);

                // Send keys to complete form
                await driver.wait(until.elementLocated(By.id('name')), 10000);
                await driver.findElement(By.id('name')).sendKeys('Amber Metini');
                await driver.wait(until.elementLocated(By.id('email')), 10000);
                await driver.findElement(By.id('email')).sendKeys(email);
                await driver.wait(until.elementLocated(By.id('telephone')), 10000);
                await driver.findElement(By.id('telephone')).sendKeys('0703339999');
                await driver.wait(until.elementLocated(By.id('comment')), 10000);
                await driver.findElement(By.id('comment')).sendKeys(
                    'I am a QA analyst and yoga enthusiast. Would you be interested in collaborating?'
                    );

                // Submit the contact form
                await driver.wait(elementLocated(By.css('.action.submit.primary')), 10000);
                await driver.findElement(By.css('.action.submit.primary')).click();

                driver.sleep(3000);

                await driver.wait(until.elementLocated(By.css('div>.message-success.success.message')), 10000);    
                let submitConfirmation = await driver.findElement(By.css('div>.message-success.success.message')).getText();

                // Assert
                submitConfirmation.should.contain("Thanks for contacting us with your comments and questions. We'll respond to you very soon.");

            } finally {
                driver.quit();
            }
        });
    });
});