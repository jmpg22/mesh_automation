import { BasePage } from "./base.page";

export class LogoutPage extends BasePage{
    userInitialsButton = this.page.locator('.sc-geXuza kcmBAV');
    logoutLink = this.page.locator('span', { hasText: 'Log out' });

    async logOut(){
        await this.userInitialsButton.click();
        await this.logoutLink.click();
    }
    
}