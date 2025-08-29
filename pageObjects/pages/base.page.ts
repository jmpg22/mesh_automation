import { Page } from "@playwright/test";

export class BasePage {
  constructor(readonly page: Page) {
    this.page = page;
  }
}

export { expect, Page } from '@playwright/test';