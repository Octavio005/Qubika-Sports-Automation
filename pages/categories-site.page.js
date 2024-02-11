const { expect } = require("@playwright/test");

exports.QubikaCategoriesPage = class QubikaCategoriesPage {
    title = '//h3[contains(text(), "Tipos de categor")]';
    addCategoryButton = '[class="btn btn-primary"]';
    lastPage = '//*[@class = "page-item ng-star-inserted"][last()]';
    lastCategory = '//tbody//tr[last()]';

    addCategoryTitle = '//*[contains(text(), "Adicionar tipo de")]';
    addCategoryInput = '[id = "input-username"]';
    addCategoryAcceptButton = '//button[contains(text(), "Aceptar")]';
    addCategoryCheckbox = 'span[class = "text-muted"]';

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  getTitle() {
    return this.title;
  }

  getAddCategoryButton() {
    return this.addCategoryButton;
  }

  getLastPage() {
    return this.lastPage;
  }

  getLastCategory() {
    return this.lastCategory;
  }

  getAddCategoryTitle() {
    return this.addCategoryTitle;
  }

  getAddCategoryInput() {
    return this.addCategoryInput;
  }

  getAddCategoryAcceptButton() {
    return this.addCategoryAcceptButton;
  }

  getAddCategoryCheckbox() {
    return this.addCategoryCheckbox;
  }

  //Creates a new category with its name and creates a subcategory if checkbox is clickced
  async addNewCategory(categoryName, isSubcategory) {
    await this.page.click(this.getAddCategoryButton());
    await this.page.waitForSelector(this.getAddCategoryTitle()); //Validates user is in Add category popup
    await this.page.fill(this.getAddCategoryInput(), categoryName);
    if(isSubcategory){
        await this.page.click(this.getAddCategoryCheckbox());
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    await this.page.click(this.getAddCategoryAcceptButton());
  }

};