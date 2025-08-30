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
    iframeExchange = this.page.frameLocator('iframe#mesh-link-popup__iframe');
    continueButton = this.page.getByRole('button', { name:  'Continue' });
    usernameBinanceInput = this.page.getByRole('textbox', { name: 'username' }); 
    passwordBinanceInput = this.page.getByRole('textbox', { name: 'password' }); 
    
    verificationCodeBinance = this.page.locator('input[name="mfaCode"]');
    verifyButton = this.page.getByRole('button', { name: 'Verify' }); 
    continueToDepositButton = this.page.getByRole('button', { name: 'Continue to deposit' }); 
    selectToken = this.page.locator('//li[@class="py-4 first:pt-0 border-b-[0.5px] border-solid border-coldGray-5 dark:border-coldGray-60"]');
    amountToDeposit = this.page.getByTestId('amount_input');//1
    previewDeposit = this.page.getByRole('button', { name:  'Preview deposit' });
    proceedDeposit = this.page.getByRole('button', { name:  'Proceed' });
    verificationCode = this.page.locator('input[name="mfaCode"]');//.fill('123456');
    doneButton = this.page.getByRole('button', { name:  'Done' });

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
        await this.page.waitForTimeout(5000);
    }
    async selectBinanceFromModal(exchange: string) {   
        await this.iframeExchange.locator('input[placeholder="Search"]').fill(exchange);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Enter');     
    }
    async continueToLoginExchange(){
        await this.iframeExchange.locator(this.continueButton).click();
    }
    async select_account_to_link(username: string, password: string){
        await this.iframeExchange.locator(this.usernameBinanceInput).fill(username);
        await this.iframeExchange.locator(this.passwordBinanceInput).fill(password);
        await this.iframeExchange.locator(this.continueButton).click();
    }
    async enter_verification_code_binance(verificationCode: string){
        await this.iframeExchange.locator(this.verificationCodeBinance).fill(verificationCode);
        await this.iframeExchange.locator(this.verifyButton).click();
        await this.iframeExchange.locator(this.continueButton).click();     
    }
    async continueDeposit(){
        await this.iframeExchange.locator(this.continueToDepositButton).click(); 
    }
    async select_deposit_token(){
        await this.iframeExchange.locator(this.selectToken).click(); 
    }
    async enter_deposit_amount(amount: string){
        await this.iframeExchange.locator(this.amountToDeposit).clear(); 
        await this.iframeExchange.locator(this.amountToDeposit).fill(amount); 
        await this.iframeExchange.locator(this.previewDeposit).click(); 
        await this.iframeExchange.locator(this.proceedDeposit).click(); 
    }
    async verification_deposit_to_confirm(verificationCode: string){
        await this.iframeExchange.locator(this.verificationCode).fill(verificationCode); 
        await this.iframeExchange.locator(this.doneButton).click(); 
    }
}