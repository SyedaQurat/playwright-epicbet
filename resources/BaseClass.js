const config = require("../playwright.config");

function setUp(test) {
    test.beforeEach('Open the page', async ({ page }) => {
        await page.goto(config.use.baseURL)
    });

    test.afterEach('Close the page', async ({ page }) => {
        await page.close()
    });
}

module.exports = setUp;