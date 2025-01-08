const { test } = require("playwright/test")
const PromotionPage = require('../pages/PromotionPage')
const setupAndTearDown = require('../resources/BaseClass');

setupAndTearDown(test)

test('test: Click Allow All Button', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Allow All Button' })
    const promotion = new PromotionPage(page);

    await promotion.elementVisible(promotion.promotionButton)
    await promotion.clickButton(promotion.promotionButton)
    await promotion.wait()
    await promotion.elementVisible(promotion.myaccountTab)
    await promotion.elementVisible(promotion.rewardTab)
})


test('test: Click Deny Button', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Deny Button' })
    const promotion = new PromotionPage(page);

    await promotion.clickButton(promotion.promotionButton)
    await promotion.wait()
    await promotion.clickButton(promotion.link)
    await promotion.wait()
    await promotion.elementVisible(promotion.aboutLabel)
    await promotion.verifyText(promotion.aboutLabel,'About')
    await promotion.verifyText(promotion.howLabel,'How it works')
    await promotion.clickButton(promotion.howLabel)
    await promotion.wait()
})