class BettingOdds {
    constructor(page) {
        this.page = page
        //this.cateogryButton = this.page.locator('[data-testid="category-button"][data-testkey="1"]:has-text("football")')
        this.cateogryButton = this.page.locator('[data-testid="category-button"][data-testkey="1"]')
        this.sportCategoryPage = this.page.locator('[data-testid="sport-category-page"] [class="ghost-box"]');
        this.outcomeButton = this.page.getByTestId('outcome-button').nth(0)
        this.odds = this.page.locator('[data-testid="outcome-button"][data-testkey="43975915"]');
        this.stake = this.page.locator('[data-testid="stake-input"]')
        this.potReturnValue = this.page.locator('[class="_1bhxhwd4 _1bhxhwd5"]').nth(1)
        this.plusFive = this.page.getByRole('button', { name: '+ 5' })
        this.plusSeven = this.page.locator('[data-testid="stake-input"]')
        this.placeBetButton = this.page.getByTestId('place-bet-button')
    }

    async wait() {
        await this.page.waitForTimeout(3000);
    }

    async clickButton(button) {
        const isVisible = await button.isVisible();
        if (isVisible != null) {
            try {
                await button.click();
            } catch (error) {
                console.error('Failed to click:', error);
            }
        } else {
            console.log('Button is not visible');
        }
    }

    async elementVisible(element) {
        try {
            await element.isVisible();
        } catch (error) {
            console.error('No element visibility:', error);
        }
    }

    async elementDisabled(element) {
        try {
            const isDisabled = element.isDisabled()
            return isDisabled
        } catch (error) {
            console.error('Element not disabled:', error);
            return false
        }
    }

    async calculatedPotReturn() {
        const value1 = await this.odds.textContent();
        const oddNumber = parseFloat(value1.replace(/[^\d.]/g, ''))

        const value2 = await this.stake.inputValue();
        const stakeNumber = parseFloat(value2.split(/[^\d.]/)[0]);

        const calculatedPotReturnValue = oddNumber * stakeNumber;
        return calculatedPotReturnValue
    }

    async actualPotReturn() {
        const actualPotReturnValue = await this.potReturnValue.textContent()
        const actualValue = actualPotReturnValue.replace(/\d+\/n(\/n)+/g, '').trim();
        return actualValue;
    }

    async placeBetNumber(number) {
        this.plusSeven.fill(number.toString())
    }

}

module.exports = BettingOdds