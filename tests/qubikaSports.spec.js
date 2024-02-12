import { test, expect } from '@playwright/test'
import { QubikaLoginPage } from '../pages/login-site.page';
import { QubikaDashboardPage } from '../pages/dashboard-site.page';
import { QubikaCategoriesPage } from '../pages/categories-site.page';


test.only('Qubika API register user', async({ request }) => {
  const response = await request.post('https://api.club-administration.qa.qubika.com/swagger-ui/index.html#/auth-controller/registerUserUsingPOST', {
      "email": "testing1@qubika.com",
      "password": "12345678",
      "roles": [
        "ROLE_ADMIN"
      ]
  });
  const text = await response.text();
  console.log(text); 
});


test('Qubika Sports Automation ', async ({ page }) => {
  const email = 'testing@qubika.com'; //New user created from Swagger
  const password = '12345678';
  const newCategory = 'Cricket';
  const newSubcategory = 'Futbol';

  const qubikaLoginPage = new QubikaLoginPage(page);
  const qubikaDashboardPage = new QubikaDashboardPage(page);
  const qubikaCategoriesPage = new QubikaCategoriesPage(page);

  await page.goto('https://club-administration.qa.qubika.com/#/auth/login');
  await expect(page).toHaveTitle(/Qubika Club/);
  await qubikaLoginPage.login(email, password); //Logs in
  await page.waitForSelector(qubikaDashboardPage.getNavbar()); //Validates user is in the dashboard site
  await page.click(qubikaDashboardPage.getCategoriesTab()); //Enters categories tab

  await page.waitForSelector(qubikaCategoriesPage.getTitle()); //Validates user is in the categories tab
  await qubikaCategoriesPage.addNewCategory(newCategory, false); //Adds new category
  await page.waitForTimeout(1000);
  await page.click(qubikaCategoriesPage.getLastPage()); //Goes to the last page to validate the new category
  await page.waitForTimeout(1000);
  const lastCategoryText = await page.textContent(qubikaCategoriesPage.getLastCategory());  
  await expect(lastCategoryText).toContain(newCategory); //Validates that new category name is the same as the const
  await qubikaCategoriesPage.addNewCategory(newCategory, true);
  await page.waitForTimeout(1000);
  const lastSubcategoryText = await page.textContent(qubikaCategoriesPage.getLastCategory());
  await expect(lastSubcategoryText).toContain(newSubcategory); //Validates that new subcategory name is the same as the const
});