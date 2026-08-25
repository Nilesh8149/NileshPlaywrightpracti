class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginButton = this.page.getByRole('link', { name: 'Login' })
        this.usernameInput = this.page.getByPlaceholder('Enter your active Email ID / Username');
        this.passwordInput = this.page.getByPlaceholder('Enter your password');
        this.submitButton = this.page.locator('.btn-primary.loginButton');

       this.invalidCredentialsMessage= this.page.getByRole('alert');
    }

    async navigate() {
        await this.page.goto('https://www.naukri.com/');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

     async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
         
    }
    
    
}

module.exports = LoginPage;