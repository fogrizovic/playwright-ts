# CLAUDE.md

## Project Overview

Playwright TypeScript test automation for the [Orange HRM demo](https://opensource-demo.orangehrmlive.com) app.

## Stack

- **Playwright** ^1.49.0
- **TypeScript** (strict mode)
- **Yarn**

## Project Structure

```
src/
  pages/    # Page Object Model classes (BasePage, LoginPage, DashboardPage)
  tests/    # Test specs (*.spec.ts)
  utils/    # Utilities (baseUrl.ts — env-aware base URL)
```

## Running Tests

```bash
yarn test:chrome   # Run all tests on Chromium only
npx playwright test              # Run on all configured browsers (Chromium, Firefox, WebKit)
```

## Permissions

The following Bash commands are pre-approved (see `.claude/settings.local.json`):

- `git checkout` — allowed for discarding file changes

## Key Conventions

- Follow the **Page Object Model** pattern: add new page classes in `src/pages/`, extend `BasePage`
- Test files go in `src/tests/` with the `.spec.ts` suffix
- Use `getBaseUrl()` from `src/utils/baseUrl.ts` for environment-aware URLs — set `ENV=dev` or `ENV=qa` (default: `qa`)
- Never leave `page.pause()` or `test.only` in committed code (`forbidOnly` is enforced on CI)
- Credentials for the demo app: `admin` / `admin123`
