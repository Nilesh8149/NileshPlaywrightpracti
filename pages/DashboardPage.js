class DashboardPage {

    constructor(page) {
        this.page = page;
        this.viewProfileButton = page.getByRole('link', { name: 'View profile' });
        this.editButton=page.locator('em').filter({hasText:'editOneTheme'})
        this.Name=page.getByPlaceholder('Enter Your Name')
        this.savebuttonLocator=page.locator('#saveBasicDetailsBtn')



    }

    async clickViewProfileButton() {
        await this.viewProfileButton.click();
         
    }

    async clickOnEditbutton(){
        await this.editButton.click()
        

    }

    async clearExistingName(){
        await this.Name.fill('')
       
    }

    async updatetheName(){
        await this.Name.fill('Nilesh Adole')
         
    }

    async savebutton(){
        await this.savebuttonLocator.click()
         
         
    }
}

module.exports = DashboardPage;