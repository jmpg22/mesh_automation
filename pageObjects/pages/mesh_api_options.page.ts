import { BasePage } from "./base.page";

export class MeshOptionsAvailable extends BasePage{
    //ty it out
    tryItOutButton = this.page.locator('text=Try it out');
       
    async go_to_dashboards(){
        await this.tryItOutButton.click();
   }

}