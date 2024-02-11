# Qubika Sports Automation
## A Qubika Sports Website Automation made with Playwright

### Project's structure
This is a basic and practical automation project based on the page object model which includes a pages folder, containing the login page, the dashboard page (the first page you see after login) and the categories tab page.
The only test file is located in the tests folder, qubikaSports.spec.js.

### Objective
The project's objective is to login into the Qubika Sports Club management System, validate the user has correctly logged in, go to the categories page, create a new category and subcategory and verify that both of them were succesfully created.

### Solution
As previously stated, the project works with the page object model, which means that for every page the Automation visits, a new file with its representation will be created, in this case the code goes through the login, dashboard and categories sites, so three page files were created.
First the Automation validates the title, ensuring the website is the correct one. After logging in, it checks that the lateral navbar is present to continue executing.
After that, it clicks the categories tab to enter. There, it creates a new category with the "addNewCategory" function in categories-site.page.js. That function will be used a second time to create the subcategory, with a boolean that, if true, checks the subcategory options and selects a father category with two keys. After the creation of both categories, the Automation checks if they exist in the last page of the list, thus, finishing the execution.

### How to run the Automation
As the project only has one test case, using a command such as:
"npx playwright show-report" should be enough. There are other options such as:
"npx playwright test --ui" to open the test administration panel and run the test case there.
"npx playwright test --headed" to watch the test case running in a headed window.
