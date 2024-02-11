const { expect } = require("@playwright/test");

exports.QubikaDashboardPage = class QubikaDashboardPage {
    navbar = 'ul[class="navbar-nav"]';
    CategoriesTab = '//*[contains(text(), "Categorias")]'

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  getNavbar() {
    return this.navbar;
  }

  getCategoriesTab() {
    return this.CategoriesTab;
  }
};