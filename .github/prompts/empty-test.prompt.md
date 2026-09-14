---
name: "Empty Playwright Test"
description: "Create a minimal Playwright test scaffold for a page navigation check."
argument-hint: "Optional: provide a test name and URL"
agent: "agent"
---

Create a minimal JavaScript Playwright test using the project's existing conventions.

Use this reference scaffold:

```javascript
import { test } from "@playwright/test";

test("Simple google test", async ({ page }) => {
  // test codes
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);
});
```

Requirements:

- Keep the `@playwright/test` import and the `page` fixture.
- Use the provided test name and URL when supplied; otherwise use `Simple google test` and `https://www.google.com`.
- Preserve the concise structure and indentation style shown above.
- Place the test in the current test file or the file identified by the user.
- Do not add assertions, extra fixtures, helper functions, or unrelated setup.
- Return only the resulting test code unless the user asks for an explanation.
