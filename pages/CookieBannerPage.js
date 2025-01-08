class CookieBannerPage {
    constructor(page) {
        this.page = page
        this.allowAll = this.page.getByRole('button', { name: 'Allow all' });
        this.deny = this.page.getByRole('button', { name: 'Deny' });
        this.contentTitle = this.page.locator('#CybotCookiebotDialogBodyContentTitle');
    }

    async clickButton(button) {
        try {
            await button.isVisible()
        }
        catch (error) {
            console.error('Button not visible', error);
        }
        await button.click()
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
}

module.exports = CookieBannerPage