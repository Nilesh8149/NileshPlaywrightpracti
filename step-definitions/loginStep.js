const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('user is on the Naukri login page', async function () {

    await this.pageManager.getLoginPage().navigate();
    await this.pageManager.getLoginPage().clickLogin();


});

When('user logs in with {string} and {string}', async function (username, password) {
    await this.pageManager.getLoginPage().login(username, password);
});


Then('user should see {string}', async function (result) {
    if (result === "success") {
        await expect(this.page).toHaveURL(/mnjuser\/homepage/);
    }
    if (result === "failure") {
        await expect(this.pageManager.getLoginPage().invalidCredentialsMessage).toBeVisible();
    }
});

