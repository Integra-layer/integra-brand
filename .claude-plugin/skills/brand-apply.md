---
name: brand-apply
description: Apply the Integra brand kit to the current project
user_invocable: true
---

# /brand-apply

Apply the Integra brand kit files to the current project, aligning it with the canonical brand identity.

## Instructions

Perform the following steps:

### 1. Detect Project Type

Check the current project for:
- `package.json` → Node/Next.js/React project
- `tailwind.config.*` or `@import "tailwindcss"` → Tailwind project
- `postcss.config.*` → PostCSS setup
- Existing `globals.css` or similar entry CSS

### 2. Copy Brand Files

Based on project type, copy the appropriate files from the integra-brand kit:

**For Tailwind v4 + Next.js projects** (most common):
1. Read `/Users/adamboudj/projects/integra-brand/kit/globals.css` and merge its `@theme` tokens into the project's existing `globals.css`. Don't overwrite existing custom tokens — add the Integra ones.
2. Copy `/Users/adamboudj/projects/integra-brand/kit/integra-logo.tsx` to `src/components/integra-logo.tsx` (adjust path if needed).
3. Copy `/Users/adamboudj/projects/integra-brand/kit/postcss.config.mjs` if no PostCSS config exists.

**For non-Tailwind projects**:
1. Copy `/Users/adamboudj/projects/integra-brand/kit/brand-tokens.css` to the project's styles directory.
2. Add `@import "./brand-tokens.css"` to the project's main stylesheet.
3. Copy the logo component if it's a React project.

**For any project**:
- Copy `/Users/adamboudj/projects/integra-brand/kit/brand-tokens.json` to the project root for programmatic access.

### 3. Fix Known Issues

After copying, scan the project for common brand violations and fix them:
- Replace `#f97316` → `#FF6D49` (wrong orange)
- Replace `#ff6b6b` → `#FF6D49` (wrong coral)
- Replace `Montserrat` → `Euclid Circular B` in font declarations
- Replace `Kode Mono` → `Geist Mono` in font declarations
- Replace `#22c55e` → `#1FC16B` (wrong green)
- Replace `#000000` → `#0A0A0F` (wrong black)

### 4. Verify

Run the project's build command to ensure nothing broke. Report what was changed.
