const {expect} = require("playwright/test")
const config = require('../playwright.config.js');

class DashboardPage {
    constructor(page) {
        this.page = page
        this.loginButton = this.page.getByText('Login')
        this.loginText = this.page.getByTestId('login-tab-button')
        this.continueButton = this.page.getByTestId('continue-button')
        this.countryDropdown = this.page.getByText('Select country')
        this.baseURL = config.use.baseURL
    }
    
    async navigateTo() {
        await this.page.goto(this.baseURL);
        await this.page.setViewportSize({ width: 1000, height: 1000 })
    }

    async verifyTitle(expectedTitle) {
        const title = await this.page.title()
        expect(title).toContain(expectedTitle)
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

module.exports = DashboardPage