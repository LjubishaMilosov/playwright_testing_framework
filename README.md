
  # BtoBetUITesting 📝  
  This project is for automated UI browser tests using Playwright with Cucumber BDD, TypeScript, and Page Object Model (POM) patther is a robust and maintainable framework designed for automating end-to-end browser tests in a behavior-driven development (BDD) style. This project leverages the power of Playwright, a modern and cross-browser automation framework, combined with Cucumber for test specification, TypeScript for strong typing, and the Page Object Model pattern for organized and reusable test code.
  
  ## Get Started 🚀  

  ### Prerequisites 🚩
  Before you begin, ensure you have the following tools installed on your system:
  - Node.js (v14 or later)
  - npm (v6 or later)
  - Playwright (installed globally)
  - Git
  
  ### Run Locally 🔥  
  
Clone the project  

~~~bash  
  git clone http://git.f1.local/f1/qa/uitesting
~~~

Go to the project directory  

~~~bash  
  cd uitesting
~~~

Create a .env file in the root directory of your project to manage environment variables
  
  `BASE_URL`
  `BROWSER`
  `EMULATION`
  `HEADLESS`
  `PWVIDEO`
  `PWDEBUG`


Install dependencies  

~~~bash  
npm install
~~~

Install Playwright browser engines

~~~bash  
npx playwright install
~~~

Running Tests  

~~~bash  
npm run cucumber
~~~  

Running Tests Mobile

~~~bash  
npm run cucumber:mobile
~~~  

Running Tests Desktop & Mobile

~~~bash  
npm run cucumber:all
~~~  

To run tests in development, make sure you have the '@dev' tag in your feature file

~~~bash  
npm run cucumber:dev
~~~  

#

This command will execute the tests using Playwright, generate HTML reports in the reports directory, and create JUnit XML reports in the reports directory. Screenshots for failing test cases will be captured in the screenshots directory.

## Code Quality ⚙️

This project includes Husky, ESLint, and Prettier for code quality and linting.

Husky is set up to run pre-commit hooks to ensure code quality.
ESLint is configured to enforce coding standards and identify issues in your TypeScript code.
Prettier is used for code formatting to maintain consistent code style.


## Reporting 📊

#### Reports can be found in the `out` directory.
- HTML reports are located in the reports directory.
- JUnit reports are also available in the reports directory.
- Screenshots for failing test cases are stored in the screenshots directory.
- Videos can be found in the videos directory when the `PWVIDEO` environment variable is set to true.