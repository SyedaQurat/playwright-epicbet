const config = require("../playwright.config");

function setUp(test) {
    test.beforeAll('Open the page', async ({ page }) => {
        await page.goto(config.use.baseURL)
    });

    test.afterAll('Close the page', async ({ page }) => {
        await page.close()
    });
}

module.exports = setUp;