import { BasePage, expect } from "../base.page";

export class MeshDeposit extends BasePage{
 //dash function
    makeDepositLink = this.page.locator('text=Make a deposit');
    //sandbox
    sandboxTab = this.page.locator('div.sc-efGlGC span', { hasText: 'Sandbox' });
    gotItButton = this.page.locator('span.sc-egkSDF', { hasText: 'Got it' });
    //add destination modal
    addDestinationLink = this.page.locator('span.sc-egkSDF.iFHPyc', {hasText: 'Add destination'});
    confirmAndSubmitButton = this.page.getByRole('button', { name:  'Confirm and submit' });
    // deposit_from_external_account 
    depositFromExternalAccountButton = this.page.getByRole('button', { name: 'Deposit from your external account' });
    //select external account
    searchInput = this.page.locator('[data-testid="account-search-input"]');
    selectBinance = this.page.locator('button[aria-label^="Select Binance"]');
    continueButton = this.page.getByRole('button', { name:  'Continue' });
    usernameBinanceInput = this.page.getByRole('textbox', { name: 'username' }); 
    passwordBinanceInput = this.page.getByRole('textbox', { name: 'password' }); 
    
    verificationCodeBinance = this.page.locator('input[name="mfaCode"]');
    verifyButton = this.page.getByRole('button', { name: 'Verify' }); 
    continueToDepositButton = this.page.getByRole('button', { name: 'Continue to deposit' }); 
    selectToken = this.page.locator('.body-r text-coldGray80 dark:text-white');
    amountToDeposit = this.page.getByTestId('amount_input');//1
    previewDeposit = this.page.getByRole('button', { name:  'Preview deposit' });
    proceedDeposit = this.page.getByRole('button', { name:  'Proceed' });
    verificationCode = this.page.getByTestId('mfaScheme');//.fill('123456');
    doneButton = this.page.getByRole('button', { name:  'Done' });
    
    makePaymentLink = this.page.locator('span', { hasText: 'Make a payment' });
    purchaseCryptoLink = this.page.locator('span', { hasText: 'Puchase crypto' });
    movePortfolioPositionsLink = this.page.locator('span', { hasText: 'Move portfolio positions' });
    viewPortfolioLink = this.page.locator('span', { hasText: 'View portfolio' });
    placeCryptoOrderink = this.page.locator('span', { hasText: 'Place crypto order' });
    placeStockOrderink = this.page.locator('span', { hasText: 'Place stock order' });

    async go_make_a_deposit(){
        await this.makeDepositLink.click();
    }
    async dismissGotItPopup() {
        if (await this.gotItButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            await this.gotItButton.click();
            await this.page.waitForTimeout(500); // Give the UI a moment to update
        }
    }
    async select_sandbox(){
        // Optional: ensure it's not already active
        const className = await this.sandboxTab.getAttribute('class');
        if (!className?.includes('active')) {
            await this.sandboxTab.click();
            await this.page.waitForTimeout(2000); // allow UI state to update
        }  
    }
    async add_destination(){
        await this.addDestinationLink.waitFor({ state: 'visible', timeout: 2000 });
        await this.addDestinationLink.click();     
    }
    async confirm_and_submit(){
        await this.confirmAndSubmitButton.click();
    }
    async deposit_from_external_account(){
        await this.depositFromExternalAccountButton.click();
    }
    async selectBinanceFromModal(exchange: string) {
        await this.page.fill('input[data-testid="account-search-input"]', exchange);
        //await this.searchInput.waitFor({ state: 'visible' });
       // await this.searchInput.fill(exchange);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Enter');
    }

    async select_account_to_link(username: string, password: string){
        await this.selectBinance.click();
        await this.continueButton.click();
        await this.usernameBinanceInput.fill(username);
        await this.passwordBinanceInput.fill(password);
        await this.continueButton.click();
    }
    async enter_verification_code_binance(verificationCode: string){
        await this.verificationCodeBinance.fill(verificationCode);
        await this.verifyButton.click();
        await this.continueButton.click();
    }
    async continue_to_deposit(){
        await this.continueToDepositButton.click();
    }
    async select_deposit_token(){
        await this.selectToken.click();
    }
    async enter_deposit_amount(amount: string){
        await this.amountToDeposit.clear();
        await this.amountToDeposit.fill(amount);
        await this.previewDeposit.click();
        await this.proceedDeposit.click();
    }
    async verification_deposit_to_confirm(verificationCode: string){
        await this.verificationCode.fill(verificationCode);
        await this.doneButton.click();
    }
}