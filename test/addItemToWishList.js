// Amber's Test

const { Builder, By, Key, until } = require("selenium-webdriver");
const should = require("chai").should();
require("dotenv").config();

// Login data
let user = process.env.TESTUSER;
let pass = process.env.PASS;

/* 
    As a customer I would like to bookmark/save favourite items in a wish 
    list to reference later or share with others.
*/

describe.only("Add an item to the wish list", () => {
  context("Log into the Luma Demostore to add items to wish list", () => {
    it("I should be able to view item on my wish list ", async () => {
      const driver = await new Builder().forBrowser("firefox").build();
      try {
        // Log into website
        await driver.get("https://magento.softwaretestingboard.com/");
        await driver
          .findElement(By.css(".authorization-link > a:nth-child(1)"))
          .click();

        //Get the form and send the keys
        await driver.wait(until.elementLocated(By.id("email")), 10000);

        await driver.findElement(By.id("email")).sendKeys(user);
        await driver.findElement(By.id("pass")).sendKeys(pass);

        //Click login button
        await driver.findElement(By.css("#send2")).click();

        //Implicit wait to allow site to load
        await driver.sleep(3000);

        // Go to new yoga collection
        await driver.findElement(By.css(".action.more.button")).click();

        // Select an item to add to wish list
        await driver.wait(until
          .elementLocated(By.css('a[href$="/nora-practice-tank.html"]')), 10000);
        await driver
          .findElement(By.css('a[href$="/nora-practice-tank.html"]')).click();

        // Select size 
        await driver.wait(until
          .elementLocated(By.css("#option-label-size-143-item-166")), 10000);
        await driver
          .findElement(By.css("#option-label-size-143-item-166"))
          .click();

        // Select color
        await driver.wait(until
          .elementLocated(By.css("#option-label-color-93-item-57")), 10000);
        await driver
          .findElement(By.css("#option-label-color-93-item-57")).click();

        // Add item to wish list
        await driver.wait(until.elementLocated(By.css('a[href$="#"]')), 10000);
        await driver.findElement(By.css('a[href="#"]')).click();

        await driver.sleep(3000);

        // View wish list and confirm that item has been added
        let addedItem = await driver
          .findElement(By.css('.product-item-name > a[title="Nora Practice Tank"]')).getText();
        
        addedItem.should.contain("Nora Practice Tank");
      } finally {
        await driver.quit();
      }
    });
  });
});
