import { expect, test } from '@playwright/test';
import testData from '../data/testData.json';
import binanceUser from '../data/binanceUser.json';
import { Pages } from "../pageObjects/pages/pages"

/*test.beforeEach('Login with valid credentials', async ({ page, baseURL }) => {
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.login_with_valid_credentials(testData.ValidUser.user, testData.ValidUser.password);
    expect(baseURL).toBeTruthy();
});

test('Go to dashboards and validate all are available', async ({ page }) => {
        const pages = Pages(page);
        await pages.meshDashs.go_to_dashboards();
    });

test('Make a deposit', async ({ page }) => {
    const pages = Pages(page);

    await pages.meshDeposit.go_make_a_deposit();
    await pages.meshDeposit.add_destination();
    await pages.meshDeposit.deposit_from_external_account();
    await pages.meshDeposit.select_account_to_link(binanceUser.ValidUser.user, binanceUser.ValidUser.password);
    await pages.meshDeposit.enter_verification_code_binance(binanceUser.ValidUser.verification_code);
    await pages.meshDeposit.continue_to_deposit();
    await pages.meshDeposit.select_deposit_token();
    await pages.meshDeposit.enter_deposit_amount(binanceUser.ValidUser.amount_to_deposit);
    await pages.meshDeposit.verification_deposit_to_confirm(binanceUser.ValidUser.verification_code);
});*/