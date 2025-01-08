const { test } = require("playwright/test")
const BettingOddsPage= require('../pages/BettingOdds')
const setupAndTearDown = require('../resources/BaseClass');

setupAndTearDown(test)

test('test: Click Betting to add 5', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Betting Odds' })
    const bettingOdds = new BettingOddsPage(page);

    await bettingOdds.wait()
    await bettingOdds.clickButton(bettingOdds.categoryButton)
    await bettingOdds.wait()
    await bettingOdds.elementVisible(bettingOdds.sportCategoryPage)
    await bettingOdds.clickButton(bettingOdds.outcomeButton)
    await bettingOdds.wait()
    await bettingOdds.clickButton(bettingOdds.plusFive)
    await bettingOdds.wait()
})


test('test: Verify expected and actual pot return are same', async ({ page }) => {
    const bettingOdds = new BettingOddsPage(page);

    await bettingOdds.clickButton(bettingOdds.categoryButton)
    await bettingOdds.elementVisible(bettingOdds.sportCategoryPage)
    await bettingOdds.clickButton(bettingOdds.outcomeButton)
    await bettingOdds.wait()
    await bettingOdds.placeBetNumber(10)
    await bettingOdds.wait()

    const potReturn = (await bettingOdds.calculatedPotReturn()).toFixed(2)
    const expectedPotReturn = parseFloat(potReturn).toString();
    const actualPotReturn = await bettingOdds.actualPotReturn();

    if (expectedPotReturn === actualPotReturn) {
        console.log('Test Passed 🥳');
    } else {
        console.log('Test Failed 😞' )}
})

test('test: Add zero and Place Bet button remains disabled', async ({ page }) => {
    const bettingOdds = new BettingOddsPage(page);

    await bettingOdds.clickButton(bettingOdds.categoryButton)
    await bettingOdds.elementVisible(bettingOdds.sportCategoryPage)
    await bettingOdds.clickButton(bettingOdds.outcomeButton)
    await bettingOdds.wait()
    await bettingOdds.placeBetNumber(0)
    await bettingOdds.wait()
    const expectBetButton = true
    const isElementDisabled = await bettingOdds.elementDisabled(bettingOdds.placeBetButton)
    if(isElementDisabled === true && expectBetButton !== false){
        console.log('Test Passed 🥳');
    }
    else console.log('Test Failed 😞' )
})