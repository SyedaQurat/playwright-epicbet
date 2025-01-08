const { test } = require("playwright/test")
const CookieBannerPage= require('../pages/CookieBannerPage')
const setupAndTearDown = require('../resources/BaseClass');

setupAndTearDown(test)

test('test: Verify Allow All Button', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Allow All Button' })
    const cookie = new CookieBannerPage(page);
    await cookie.elementVisible(cookie.contentTitle)
    await cookie.elementVisible(cookie.allowAll)
    await cookie.wait()
    await cookie.clickButton(cookie.allowAll)
    await cookie.wait()
})


test('test: Verify Deny Button', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Deny Button' })
    const cookie = new CookieBannerPage(page);

    await cookie.elementVisible(cookie.contentTitle)
    await cookie.elementVisible(cookie.deny)
    await cookie.wait()
    await cookie.clickButton(cookie.deny)
    await cookie.wait()
})