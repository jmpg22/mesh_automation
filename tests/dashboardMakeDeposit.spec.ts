import { expect, test } from '@playwright/test';
import testData from '../data/testData.json';
import binanceUser from '../data/exchangeUser.json';
import { Pages } from "../pageObjects/pages/pages"

test.beforeEach(async ({ page, baseURL }) => {
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.login_with_valid_credentials(testData.ValidUser.user, testData.ValidUser.password);
    expect(baseURL).toBeTruthy();
});

test('Make a deposit e2e flow', async ({ page }) => {
    const pages = Pages(page);
    await test.step('Step- User is able to go to Mesh dashboards', async () => { 
        await pages.meshDashs.go_to_dashboards(); 
    });
    await test.step('Step- User is able to start deposit flow', async () => {
        await pages.meshDeposit.go_make_a_deposit();
        await pages.meshDeposit.dismissGotItPopup();
        await pages.meshDeposit.select_sandbox(); 
    });
    await test.step('Step- User enters destination to deposit and confirm transaction', async () => {
        await pages.meshDeposit.add_destination();
        await pages.meshDeposit.confirm_and_submit();
    });
    await test.step('Step- User selects account to link', async () => {
        await pages.meshDeposit.deposit_from_external_account();
    });
    await test.step('Step- User selects exchange', async () => {
        await pages.meshDeposit.selectBinanceFromModal(binanceUser.ValidUser.exchange);
    });
    await test.step('Step- User goes to login to exchange', async () => {
        await pages.meshDeposit.continueToLoginExchange();
    });
    await test.step('Step- User login to exchange', async () => {
        await pages.meshDeposit.select_account_to_link(binanceUser.ValidUser.user, binanceUser.ValidUser.password);
    });
    await test.step('Step- User enter verification code to be identified', async () => {
        await pages.meshDeposit.enter_verification_code_binance(binanceUser.ValidUser.verification_code);
    });
    await test.step('Step- User continues to deposit', async () => {
        await pages.meshDeposit.continueDeposit();
    });
    await test.step('Step- User select deposit token', async () => {
        await pages.meshDeposit.select_deposit_token();
    });
    await test.step('Step- User enters amount to deposit', async () => {
        await pages.meshDeposit.enter_deposit_amount(binanceUser.ValidUser.amount_to_deposit);
    });
     await test.step('Step- User enters verification code to confirm deposit', async () => {
        await pages.meshDeposit.verification_deposit_to_confirm(binanceUser.ValidUser.verification_code); 
    });
    await test.step('Step- User ends session', async () => {
        await pages.logoutPage.logOut();
        await expect(page).toHaveURL('/login')
    });
});
