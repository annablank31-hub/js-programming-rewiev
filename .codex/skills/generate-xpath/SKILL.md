---
name: generate-xpath
description: Generate a robust XPath from a pasted web element, HTML snippet, or selector context. Use when the user asks to create, derive, improve, or explain an XPath for a web element.
---

# Generate XPath

When the user pastes a web element or HTML snippet, derive a reliable XPath for it.

## Workflow

1. Inspect the element and its nearby attributes, text, and hierarchy.
2. Prefer stable, meaningful attributes such as `id`, `name`, `data-testid`, `aria-label`, or stable class names.
3. Avoid brittle absolute paths, generated framework classes, positional indexes, and `contains()` when an exact stable match is available.
4. If the element has a unique visible text value, consider a text-based XPath, while accounting for nested elements and whitespace.
5. If the snippet does not uniquely identify the element, state the ambiguity and provide the best XPath plus one or two alternatives.
6. For Playwright, prefer a locator when it is clearly more robust than XPath, but still provide the requested XPath.

## Response format

Return:

```text
XPath: <recommended XPath>
```

Then briefly explain why it is stable. If useful, include:

```text
Alternative: <fallback XPath>
Playwright: page.locator('<selector or XPath>')
```

Do not invent attributes or claim uniqueness without evidence. Ask for the surrounding HTML only when the pasted element is insufficient to construct a meaningful selector.
