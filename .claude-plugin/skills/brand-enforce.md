---
name: brand-enforce
description: Enforce Integra brand compliance on staged git changes before commit
user_invocable: true
---

# /brand-enforce

Check staged git changes for brand compliance before committing.

## Instructions

### 1. Get Staged Changes

Run `git diff --cached --name-only` to get the list of staged files. Filter to only CSS, TSX, JSX, and config files.

### 2. Check Each File

For each staged file, use `git diff --cached <file>` to see only the new/changed lines. Check for:

**Blocking violations (must fix before commit):**
- Hardcoded non-brand hex colors in CSS or inline styles
- Font declarations using unapproved fonts
- Wrong dark background colors

**Warnings (flag but don't block):**
- Hardcoded hex values that should use CSS variables or design system tokens
- Missing font fallback stacks

### 3. Report

If violations found:
```
BRAND CHECK FAILED — X violations found:

| File | Line | Issue | Fix |
|------|------|-------|-----|
...

Fix these issues before committing.
```

If clean:
```
BRAND CHECK PASSED — all staged changes comply with Integra brand guidelines.
```

### Canonical Values Reference

- Primary: `#FF6D49`
- Pink: `#F34499`
- Success: `#1FC16B`, Warning: `#FA7319`, Danger: `#FA3748`, Info: `#335CFF`
- Dark bg: `#0A0A0F`
- Font sans: `Euclid Circular B`
- Font mono: `Geist Mono`
