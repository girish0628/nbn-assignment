const { client } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');

Given(/^I open nbn-assignment site`s home page$/, () => {
  return client
    .url('http://localhost:3000');
});

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the Home page exists$/, () => {
  return client
  .waitForElementVisible('div[class="map"]',20000)
  .assert.visible('td[class="list-group"]');
 
});

