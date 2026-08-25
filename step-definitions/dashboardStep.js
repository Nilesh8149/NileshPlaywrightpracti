const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('user should be on the homepage', async function () {
	await expect(this.page).toHaveURL(/mnjuser\/homepage/)
});

When('user clicks on the View profile button', async function () {
	

	await this.pageManager.getDashboardPage().clickViewProfileButton()
});

 When('user clicks on the Edit button', async function () {
    await this.pageManager.getDashboardPage().clickOnEditbutton()
});

When('user deletes the existing name', async function () {
	await this.pageManager.getDashboardPage().clearExistingName();
  
});

When('user adds the name {string} again', async function (Name) {
	 await this.pageManager.getDashboardPage().updatetheName()
  
});



Then('user should save the updated name', async function () {
  await this.pageManager.getDashboardPage().savebutton()
  await expect(this.page.locator('.success-text')).toContainText('Profile updated successfully')
});