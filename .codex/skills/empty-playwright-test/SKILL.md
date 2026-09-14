---
name: empty-playwright-test
description: Create an empty Playwright Test spec using the project's existing test conventions. Use when the user asks for a blank, starter, or empty Playwright test.
---

# Empty Playwright Test

Create a minimal Playwright Test file that is ready for the user to fill in.

## Workflow

1. Inspect the repository for its Playwright configuration, package scripts, and nearby test files.
2. Follow the existing project conventions for test directories, file names, imports, and JavaScript or TypeScript.
3. Create the requested test file with one empty test body.
4. Keep the generated file minimal. Do not add assertions, fixtures, page objects, or setup unless the project convention requires them.
5. Verify that Playwright discovers the new file when the project has a test listing command.

## Default template

For JavaScript projects:

```js
import { test } from '@playwright/test';

test('TODO: describe the test', async ({ page }) => {
});
```

For TypeScript projects, use the same template in a `.spec.ts` file.

If the user gives a test name or file path, use it exactly when it is compatible with the repository conventions. Otherwise, choose a descriptive `.spec.js` or `.spec.ts` name in the established test directory.
