//Amber's Experimental Test

const { Builder, By, until, Key } = require("selenium-webdriver");
const should = require("chai").should();
require("dotenv").config();

// Login data
let user = process.env.TESTUSER;
let pass = process.env.PASS;

/* 
    As a customer I would like to bookmark/save favourite items in a wish 
    list to reference later or share with others.
*/

describe("Add an item to the wish list", () => {
    context("Log into the Luma Demostore to add items to wish list", async () => {
        it("I should be able to view item on my wish list ", async () => {
            const driver = await new Builder().forBrowser("firefox").build()
            const actions = driver.actions();
            try {
             await driver.get("https://magento.softwaretestingboard.com");
              
              // Go to New Yoga Collection
              await driver.findElement(By.css('.action.more.button')).click();

              // Select an item to add to wish list
              await driver.wait(until.elementLocated(By.css('a[href$="/echo-fit-compression-short.html"]')), 10000);
              let hoverItem = await driver.findElement(By.css('a[href$="/echo-fit-compression-short.html"]'));
              await driver.executeScript("arguments[0].scrollIntoView(true);", hoverItem);

              // Hover over the item
              await actions.move({duration: 1000, origin: hoverItem}).perform();

              // Select the item size
              await driver.wait(until.elementLocated(By.id('option-label-size-143-item-171')), 10000);
              await driver.findElement(By.css('#option-label-size-143-item-171')).click();
            
              // Select the item color
              await driver.wait(until.elementLocated(By.css('#option-label-color-93-item-50')), 10000);
              await driver.findElement(By.css('#option-label-color-93-item-50')).click();

              // Add item to wish list
              await driver.wait(until.elementLocated(By.css('.action.towishlist')), 10000);

              // Hover over item again in order to make the wish list icon viewable
              await actions.move({duration: 1000, origin: hoverItem}).perform();
              await driver.findElement(By.css('.action.towishlist')).click();

              await driver.sleep(3000);

              // Log into website
              
              await driver.findElement(By.css(".authorization-link > a:nth-child(1)")).click();

              // Await form to load
              await driver.wait(until.elementLocated(By.id("email")), 10000);

              // Send keys
              await driver.findElement(By.id("email")).sendKeys(user);
              await driver.findElement(By.id("pass")).sendKeys(pass);

              // Click login button
              await driver.findElement(By.css("#send2")).click();

              await driver.sleep(1000);

              // View wish list and confirm that item has been added
              let addedItem = await driver.findElement(By.css('.product-item-name > a[title="Echo Fit Compression Short"]')).getText();
              addedItem.should.contain('Echo Fit Compression Short'); 
            } finally {
              await driver.quit();
            }
          });
      });
});
