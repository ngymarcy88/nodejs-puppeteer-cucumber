const { Given, When, Then } = require('cucumber');
const scope = require('../support/scope');
let subject = (Math.random() + 1).toString(36).substring(7);

Given('Go to page {string}',async function (string) {
    await scope.page.goto(string, { waitUntil: 'networkidle0' });
})

When('Fill the email with {string}',async function (string) {
    await scope.page.type('#i0116', string);
})

Then('Click the next button',async function () {
    await scope.page.waitForSelector('#lightbox > div:nth-child(3) > div > div > div > div.win-button-pin-bottom > div > div > div > div');
    await scope.page.click('#idSIButton9');
})

When('fill the password with {string}',async function (string) {
    await scope.page.waitForSelector('#lightbox > div:nth-child(3) > div > div.pagination-view.animate.has-identity-banner.slide-in-next > div > div.position-buttons > div.win-button-pin-bottom > div > div > div > div');
    await scope.page.type('#i0118', string);
})

Then('Click on Next',async function () {
    await scope.page.waitForSelector('#lightbox > div:nth-child(3) > div > div.pagination-view.animate.has-identity-banner.slide-in-next > div > div.position-buttons > div.win-button-pin-bottom > div > div > div > div');
    await scope.page.click('#idSIButton9');
})

Then('Click on Yes',async function () {
    await scope.page.waitForSelector('#lightbox > div:nth-child(2) > div > div.pagination-view.has-identity-banner.animate.slide-in-next > div > div.position-buttons > div:nth-child(2) > div > div > div:nth-child(1)');
    await scope.page.click('#idSIButton9');
})

Given('Send email form {string}',async function (string) {
    await scope.page.goto(string,{waitUntil: "networkidle2"});
})

When('Type {string} to the form',async function (string) {
    await scope.page.keyboard.type(string);
})

Then('Type random subject',async function () {
    await scope.page.type('#TextField22',subject);
})

Then('Press Control+Enter to send',async function () {
    await scope.page.keyboard.down('Control');
    await scope.page.keyboard.press('Enter');
    await scope.page.keyboard.up('Control');
})

Given('Sent emails url {string}',async function (string) {
    await scope.page.goto(string);
})

When('Click on the last sent email',async function () {
    await scope.page.waitForSelector('.NsB53xFTU532cgP0ztFSC');
    let sentEmails = await scope.page.$$('.NsB53xFTU532cgP0ztFSC');
    await sentEmails[0].click();
})

Then('The subject should be {string}',async function (string) {
    await scope.page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._14uPwhS4qAwiL0JC4Oduh- > div > div > div > div > span');
    let sub = await scope.page.$('#ReadingPaneContainerId > div > div > div > div._14uPwhS4qAwiL0JC4Oduh- > div > div > div > div > span');
    let text = await scope.page.evaluate(el => el.textContent, sub);
    if (text === subject) console.log('match')
});

Given('Im at sent emails url {string}',async function (string) {
    await scope.page.goto('https://outlook.live.com/mail/0/sentitems');
})


When('Click on Delete all',async function () {
    await scope.page.waitForSelector('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(3) > button > span');
    await scope.page.click('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(3) > button > span');
    //await scope.page.waitForSelector('button[name="Mappa ürítése"]');
    //await scope.page.click('button[name="Mappa ürítése"]');
})

Then('Confirm it',async function () {
    await scope.page.waitForSelector('#ok-1');
    await scope.page.click('#ok-1');
})
