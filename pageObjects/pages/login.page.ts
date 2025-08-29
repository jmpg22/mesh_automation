import { BasePage } from "./base.page";

export class LoginPage extends BasePage{
    //login
    usernameInput = this.page.locator('#input_email');
    passwordInput = this.page.locator('#input_password');
    signInButton = this.page.getByRole('button',{name: 'Sign In'});
    upgradeButton = this.page.getByRole('button',{name: 'Upgrade'});

    async gotoLoginPage(){
        await this.page.goto('/login');
    }
    async login_with_valid_credentials(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

}