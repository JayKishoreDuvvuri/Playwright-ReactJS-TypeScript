### Playwright With TypeScript For Sauce Demo Website

An example project demonstrating automation of playwright tests using page object design pattern framework.

#### Application Under Test

We are using https://www.saucedemo.com/ as the Application Under Test. This App is a **React.js** Frontend

- URL: https://www.saucedemo.com/
- OS : macOS
- IDE : Visual Studio Code

#### Scenarios

```bash
Scenario 1: Login as a standard user to verify the products page and logout from the application

Scenario Description: User logs into the website and verifies all the elements on the products
page and logs out from the application.

Testname: TC_01_productPage.test.ts
```

```bash
Scenario 2: Login as a standard user to complete the checkout workflow

Scenario Description: User logs into the website and completes the checkout workflow and logs out
from the application. This is a Happy path test scenario.

Testname: TC_02_checkoutWorkflow.test.ts
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-ReacJS-TypeScript.git
```
 
Install dependencies

```bash
npm install
npx playwright install --with-deps
```

#### Run application

Run tests individually

```bash
npm run test:one - Run the test TC_01_productPage.test.ts
npm run test:two - Run the test TC_02_checkoutWorkflow.test.ts
```

Run tests in Parallel chrome

```bash
npm run test:chrome - For tests only on chrome browser
```

Run tests in Parallel firefox

```bash
npm run test:firefox - For tests only on firefox browser
```

Run tests in Parallel safari

```bash
npm run test:safari - For tests only on safari browser
```

Run tests in Parallel edge

```bash
npm run test:edge - For tests only on edge browser
```

Run tests in Parallel on all browsers (chrome, safari, edge and firefox)

```bash
npm run test  - For tests only on all browsers
```