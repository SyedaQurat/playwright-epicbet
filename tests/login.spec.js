const { test } = require("playwright/test")
const DashboardPage = require('../pages/DashboardPage')
const setupAndTearDown = require('../resources/BaseClass');

setupAndTearDown(test)

test('test: Verify Login Prompt', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Login Prompt' })
    const dashboard = new DashboardPage(page);

    await dashboard.navigateTo();
    await dashboard.verifyTitle('Epicbet')
    await dashboard.clickButton(dashboard.loginButton)
    await dashboard.wait()

    await dashboard.elementVisible(dashboard.loginText)
    await dashboard.elementVisible(dashboard.continueButton)
    await dashboard.elementVisible(dashboard.countryDropdown)
})