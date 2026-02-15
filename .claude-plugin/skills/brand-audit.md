---
name: brand-audit
description: Audit the current project for Integra brand compliance
user_invocable: true
---

# /brand-audit

Audit the current project for compliance with the Integra brand guide.

## Instructions

Launch the `brand-auditor` agent using the Task tool with this prompt:

```
Audit the project at {current working directory} for Integra brand compliance.

Scan all CSS files (*.css, *.scss), Tailwind config files, and component files (*.tsx, *.jsx) for:

1. COLORS: Any hardcoded hex colors that don't match the canonical palette. Flag wrong primaries (#f97316, #ff6b6b), wrong status colors (#22c55e, #eab308, #ef4444, #3b82f6), and wrong dark backgrounds (#000000, #111111).

2. FONTS: Any font-family declarations using non-approved fonts (Montserrat, Space Grotesk, Inter, Kode Mono, Arial, Helvetica). The only approved fonts are Euclid Circular B and Geist Mono.

3. TOKENS: Whether the project uses @integra/design-system or has the brand tokens imported. Flag hardcoded values that should reference tokens.

4. LOGOS: Check if logo components/SVGs use the canonical pinwheel mark path data.

Output a severity-rated findings table (ERROR/WARN/INFO) with file, line, issue, and fix columns. End with a summary score: X errors, Y warnings, Z suggestions.
```

Use `subagent_type: "integra-brand:brand-auditor"` for the Task tool.

If the agent is not available, perform the audit directly using Grep and Read tools following the same procedure.
