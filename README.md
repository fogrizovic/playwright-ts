# Playwright-TS

A TypeScript-based testing project using Playwright.

## Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js**: Version 16 or higher.
2. **Yarn**: A package manager for Node.js. Follow the [Yarn installation guide](https://yarnpkg.com/getting-started/install) if it's not already installed.
3. **Git**: Optional, for cloning the repository.

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone git@github.com:fogrizovic/playwright-ts.git
   cd playwright-ts
   ```

2. Install the project dependencies:
   ```bash
   yarn install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

The tests in this project are designed to interact with the demo site [Orange HRM](https://opensource-demo.orangehrmlive.com/)

To run the tests using the Chromium browser, execute the following command:

   ```bash
   yarn test:chrome
   ```

This will run all test files located in the `src/tests` directory.

## License

This project is licensed under the [MIT License](LICENSE).
