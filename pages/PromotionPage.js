const {expect} = require("playwright/test");

class PromotionPage {
    constructor(page) {
        this.page = page
        this.promotionButton = this.page.locator('[data-testkey="user.account.promotions"][tab-id="user.account.promotions"]:has-text("promotions")');
        this.myaccountTab = this.page.getByTestId('profile-tab-button')
        this.rewardTab = this.page.getByTestId('rewards-tab-button')
        this.link = this.page.locator('a[href="/en/ice-hockey-early-win"]:has-text("CALLING ALL HOCKEY FANS!")')
        this.aboutLabel = this.page.locator('label[for="tab1"]')
        this.howLabel = this.page.locator('label[for="tab2"]')
    }

    async clickButton(button) {
        const isVisible = await button.isVisible();
        if (isVisible != null) {
            await button.click()
        }
        else console.log('Button is not visible');
    }

    async wait() {
        await this.page.waitForTimeout(3000);
    }

    async elementVisible(element) {
        try {
            await element.isVisible();
        } catch (error) {
            console.error('No element visibility:', error);
        }
    }

    async verifyText(labelLocator, expectedText) {
        await expect(labelLocator).toHaveText(expectedText);
    }



}

module.exports = PromotionPage