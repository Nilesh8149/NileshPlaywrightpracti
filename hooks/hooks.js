const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const PageManager = require('../pages/PageManager');

Before(async function () {

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    this.pageManager = new PageManager(this.page);
});

After(async function () {

    await this.page.close();
    await this.context.close();
    await this.browser.close();
});