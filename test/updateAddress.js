//includes
const { Builder, By , Key , until } = require('selenium-webdriver');
const should = require('chai').should();
require('dotenv').config();

//Log in data
let user = process.env.USER;
let pass = process.env.PASS;

/* As a customer,
I want to be able to able to log in to the webpage
and update my contact details */
describe('Update PhoneNumber & StreetAdress',() =>{
    context('Login to website and click on edit address', () => {
        it('I should be able to edit phonenumber & street address and save it',async () => {
            const driver = await new Builder().forBrowser('firefox').build();

            try {

                    //Go to the store
            await driver.get('https://magento.softwaretestingboard.com/'); 
            await driver.findElement(By.css('.authorization-link > a:nth-child(1)')).click();

            //Get the form and send the keys
            await driver.wait(until.elementLocated(By.id('email')),10000);
            
            await driver.findElement(By.id('email')).sendKeys(user);
            await driver.findElement(By.id('pass')).sendKeys(pass);

            //Click login button
            await driver.findElement(By.css('#send2')).click(); 

            //Implicit wait to allow site to load
            await driver.sleep(1000);

            //Get to our profile
            await driver.wait(until.elementLocated(By.css('.action.switch')),20000);
            await driver.findElement(By.css('.action.switch')).click();

            await driver.wait(until.elementLocated(By.css('a[href$="/customer/account/"]')),10000);
            await driver.findElement(By.css('a[href$="/customer/account/"]')).click();

          //Get to my Account Page
            await driver.wait(until.elementLocated(By.css('a[href$="/customer/address/edit/id/2572/"]')),10000);
            await driver.findElement(By.css('a[href$="/customer/address/edit/id/2572/"]')).click();
         //Find the input field by its locator for changing the existing telephone
            const inputField1 = await driver.findElement(By.id('telephone'));
         // Clear the existing Input field for updating new telephone number
            await inputField1.clear();
            await driver.sleep(10000);
         // Enter the new value in the input field
            await inputField1.sendKeys('0709800210'); 

         //Find the input field for changing the  existing address
           const inputFeild2 = await driver.findElement(By.id('street_1'));
        //clear the existing Input field for updating the address
           await inputFeild2.clear();
           await driver.sleep(10000);
        //Enter the new value in the input feild
           await inputFeild2.sendKeys('Lumagatan 17B');

        //Get to save address
           await driver.wait(until.elementLocated(By.css('.action.save.primary')),10000);
           await driver.findElement(By.css('.action.save.primary')).click();

        //Get and check your information
            await driver.wait(until.elementLocated(By.css('.box-content')),10000);
            const information1 = await driver.findElement(By.css('.box-content')).getText();
            const information2 = await driver.findElement(By.css('.box-content')).getText();


        //Assert

           
            information1.should.contain('Lumagatan 17B');
            information2.should.contain('0709800210');
        

            } finally  {
               
                await driver.quit();


            }


        });
    });
});