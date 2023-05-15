//malin 
const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();
    /*
   As a customer I want to compare two items to eachother
   */
describe.only('Compare two different running shorts to eachother', () => {
    context('Search for shorts, filter on runners and add two styles to compare', () => {
        it('I should get a camparison of the two styles of shorts', async () => {
                
                const driver = await new Builder().forBrowser('firefox').build();  

                try{
                  
                    await driver.get('https://magento.softwaretestingboard.com/')
                    
                    // Search for running shorts
                    await driver.wait(until.elementLocated(By.css('#search')), 10000);
                    await driver.findElement(By.id('search')).sendKeys('running shorts', Key.RETURN);

                    // Select first product and add to "compare"
                    await driver.wait(until.elementLocated(By.css('a[href$="/erika-running-short.html"]')), 10000);
                    await driver.findElement(By.css('a[href$="/erika-running-short.html"]')).click();
                    await driver.sleep(1000);
                    await driver.wait(until.elementLocated(By.css('.action.tocompare')), 10000);
                    await driver.findElement(By.css('.action.tocompare')).click();
                    
                    // Return to searchresults
                    await driver.sleep(1000);
                    await driver.wait(until.elementLocated(By.css('#search')), 10000);
                    await driver.findElement(By.id('search')).sendKeys('running shorts', Key.RETURN);

                    // Select second product and add to "compare"
                    await driver.wait(until.elementLocated(By.css('a[href$="/artemis-running-short.html"]')), 10000);
                    await driver.findElement(By.css('a[href$="/artemis-running-short.html"]')).click();
                    await driver.sleep(1000);
                    await driver.wait(until.elementLocated(By.css('.action.tocompare')), 10000);
                    await driver.findElement(By.css('.action.tocompare')).click();

                    // Go to "Compare products"
                    await driver.sleep(1000);
                    await driver.wait(until.elementLocated(By.css('.action.compare')), 0000);
                    await driver.findElement(By.css('.action.compare')).click();
       

                }catch(error) {
                    console.log(error);
                } finally {
                    //await driver.quit();

                }

        });
    });
});