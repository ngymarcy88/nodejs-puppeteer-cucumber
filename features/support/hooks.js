const { BeforeAll, AfterAll, Before, After, setDefaultTimeout} = require('cucumber');
const scope = require('./scope');

BeforeAll(async () => {
    scope.driver = require('puppeteer');
    scope.browser = await scope.driver.launch({headless: false});
})

setDefaultTimeout(20000)

Before(async () => {
    scope.page = await scope.browser.newPage();
})

/*After(async () => {
    await scope.page.close();
});*/

AfterAll(async () => {
    if (scope.browser) {
        await scope.browser.close()
    }
})