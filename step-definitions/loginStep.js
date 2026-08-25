const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('user is on the Naukri login page', async function () {

    await this.pageManager.getLoginPage().navigate();
    await this.pageManager.getLoginPage().clickLogin();


});

When('user logs in with {string} and {string}', async function (username, password) {
    const resolvedUsername = username === 'VALID_USER' ? process.env.NAUKRI_EMAIL : username;
	const resolvedPassword = password === 'VALID_PASSWORD' ? process.env.NAUKRI_PASSWORD : password;

    await this.pageManager.getLoginPage().login(resolvedUsername, resolvedPassword);
});

When('user logs in with valid credentials', async function () {
	const email = process.env.NAUKRI_EMAIL;
	const password = process.env.NAUKRI_PASSWORD;

	if (!email || !password) {
		throw new Error('NAUKRI_EMAIL or NAUKRI_PASSWORD not set in .env file');
	}

	await this.pageManager.getLoginPage().login(email, password);
});

Then('user should see {string}', async function (result) {
    if (result === "success") {
        await expect(this.page).toHaveURL(/mnjuser\/homepage/);
    }
    if (result === "failure") {
        await expect(this.pageManager.getLoginPage().invalidCredentialsMessage).toBeVisible();
    }
});

