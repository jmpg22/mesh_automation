import { Page } from '@playwright/test';
import { LoginPage } from './login.page';
import { MeshOptionsAvailable } from './mesh_api_options.page';
import { MeshDeposit } from './meshOptions/meshDeposit.page';

export const Pages = (page: Page) => {
    return {
        loginPage: new LoginPage(page),
        meshDashs: new MeshOptionsAvailable(page),
        meshDeposit: new MeshDeposit(page),
    };
};