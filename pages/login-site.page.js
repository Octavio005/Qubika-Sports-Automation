const { expect } = require("@playwright/test");

exports.QubikaLoginPage = class QubikaLoginPage {
    title = 'h3';
    subtitle = 'small';
    emailInput = 'input[type="email"]';
    passwordInput = 'input[type="password"]';
    loginButton = 'button[type="submit"]';

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  getTitle() {
    return this.title;
  }

  getSubtitle() {
    return this.subtitle;
  }

  getEmailInput() {
    return this.emailInput;
  }

  getPasswordInput() {
    return this.passwordInput;
  }

  getLoginButton() {
    return this.loginButton;
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
};