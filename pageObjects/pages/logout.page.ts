import { BasePage } from "./base.page";

export class LogoutPage extends BasePage{
    userInitialsButton = this.page.locator('div.sc-geXuza.kcmBAV');
    logoutLink = this.page.getByText('Log out');

    async logOut(){
        await this.userInitialsButton.click();
        await this.logoutLink.click();
    }
    
}