const{ Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();

/* 
    As a customer 
    I want to subscribe to the newsletter 
    so that I will get informed about offers from the Luma store.
*/

describe('Subscribe for Newsletter', async () => {

    context('I subscribe for the newsletter', async () =>{

        it('I should be able to see subscrption successfull message', async () => {
            
            const driver = await new Builder().forBrowser('firefox').build();

            try {
                //Go to magento website
                await driver.get('https://magento.softwaretestingboard.com/');
                
                // Get the suscription input
                await driver.wait(until.elementLocated(By.css('#newsletter')), 10000);
                
                // Define the base of the email address
                const email_base = "testuser{}@example.com";

                // Generate a random string of 6 characters
                let random_string = '';
                const characters = 'abcdefghijklmnopqrstuvwxyz';
                for (let i = 0; i < 6; i++) {
                random_string += characters.charAt(Math.floor(Math.random() * characters.length));
                }


                // Concatenate the random string to the email base
                const email = email_base.replace('{}', random_string);
                
                await driver.findElement(By.id('newsletter')).sendKeys(email);
                
                await driver.sleep(2000);

                await driver.findElement(By.css('.action.subscribe.primary')).click();
                
                await driver.wait(until.elementLocated(By.css('.message-success.success.message')), 10000);
                 // Find success message
                let successLebel = await driver.findElement(By.css('.message-success.success.message'));
                 // Extract text
                 let successLebelText = await successLebel.getText();

                 console.log(successLebelText);

                 successLebelText.should.equal('Thank you for your subscription.');


            } finally {
                await driver.quit();
            }
        });
    });
});