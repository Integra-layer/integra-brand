# Integra Brand Guide

Official visual identity reference for the **Integralayer** ecosystem.

**Live:** [integra-brand.vercel.app](https://integra-brand.vercel.app)

---

## Logo

The Integra mark is a geometric pinwheel — four interlocking quadrants symbolizing interconnected real-world assets.

### Icon Mark

| Primary | Pink | White (dark bg) | Dark (light bg) |
|:-------:|:----:|:---------------:|:---------------:|
| ![Primary](public/logos/integra-mark.svg) | ![Pink](public/logos/integra-mark-pink.svg) | ![White](public/logos/integra-mark-white.svg) | ![Dark](public/logos/integra-mark-dark.svg) |
| `#FF6D49` | `#F34499` | `#FFFFFF` | `#0A0A0F` |

### Wordmark

| Dark (for light backgrounds) | White (for dark backgrounds) |
|:----------------------------:|:----------------------------:|
| ![Dark wordmark](public/logos/integra-wordmark-dark.svg) | ![White wordmark](public/logos/integra-wordmark-white.svg) |

### App Icon

| App Icon |
|:--------:|
| ![App icon](public/logos/integra-icon-app.svg) |
| Rounded corners, dark bg, pink mark |

### Logo Rules

- Minimum size: **24px** for the icon mark
- Clear space: at least **1x** the mark height on all sides
- Never stretch, rotate, or add effects (shadows, outlines)
- Use white on dark backgrounds, dark on light backgrounds

---

## Color Palette

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| ![#FF6D49](https://via.placeholder.com/24/FF6D49/FF6D49.png) **Primary** | `#FF6D49` | Flagship coral-orange — buttons, links, accents |
| ![#FC4E23](https://via.placeholder.com/24/FC4E23/FC4E23.png) **Primary Dark** | `#FC4E23` | Hover and active states |
| ![#FF8A65](https://via.placeholder.com/24/FF8A65/FF8A65.png) **Primary Light** | `#FF8A65` | Subtle accents, highlights |
| ![#FFC17A](https://via.placeholder.com/24/FFC17A/FFC17A.png) **Gold** | `#FFC17A` | Warm accent, rewards |
| ![#F34499](https://via.placeholder.com/24/F34499/F34499.png) **Pink** | `#F34499` | Secondary accent, gradients |
| ![#FFAFD6](https://via.placeholder.com/24/FFAFD6/FFAFD6.png) **Pink Light** | `#FFAFD6` | Gradient start |
| ![#F71227](https://via.placeholder.com/24/F71227/F71227.png) **Red** | `#F71227` | Gradient end |
| ![#00A186](https://via.placeholder.com/24/00A186/00A186.png) **Teal** | `#00A186` | Contrast accent |

### Status Colors

| Color | Hex | Usage |
|-------|-----|-------|
| ![#1FC16B](https://via.placeholder.com/24/1FC16B/1FC16B.png) **Success** | `#1FC16B` | Positive, online, confirmed |
| ![#FA7319](https://via.placeholder.com/24/FA7319/FA7319.png) **Warning** | `#FA7319` | Caution, pending |
| ![#FA3748](https://via.placeholder.com/24/FA3748/FA3748.png) **Danger** | `#FA3748` | Error, destructive |
| ![#335CFF](https://via.placeholder.com/24/335CFF/335CFF.png) **Info** | `#335CFF` | Informational, links |

### Neutral Scale

```
#FFFFFF → #FAFAF8 → #F5F5F2 → #E5E7EB → #D1D5DB → #9CA3AF
#6B7280 → #4B5563 → #374151 → #1F2937 → #111827 → #0A0A0F
```

### Chart Colors

| Series 1 | Series 2 | Series 3 | Series 4 | Series 5 | Series 6 |
|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
| `#FF6D49` | `#F34499` | `#335CFF` | `#1FC16B` | `#FFC17A` | `#A855F7` |

---

## Typography

### Primary: Euclid Circular B

The canonical font for all Integra products — headings, body text, UI elements.

```
Font family: "Euclid Circular B", Verdana, system-ui, sans-serif
Weights:     400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### Monospace: Geist Mono

For blockchain addresses, transaction hashes, code blocks, and financial data.

```
Font family: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace
Weights:     400 (Regular), 700 (Bold)
```

### Type Scale

| Name | Size | Use |
|------|------|-----|
| `7xl` | 110px / 6.875rem | Hero headlines |
| `5xl` | 48px / 3rem | Page titles |
| `3xl` | 30px / 1.875rem | Section headings |
| `xl` | 20px / 1.25rem | Subtitles |
| `base` | 16px / 1rem | Body text |
| `sm` | 14px / 0.875rem | Captions, secondary text |
| `xs` | 12px / 0.75rem | Labels, metadata |

---

## Gradients

### Brand Gradient

The signature Integra gradient — used for hero sections, CTAs, and key visuals.

```css
background: linear-gradient(135deg, #FFAFD6, #F34499, #FC4E23, #F71227);
```

### All Gradients

| Name | CSS | Usage |
|------|-----|-------|
| **Brand** | `linear-gradient(135deg, #FFAFD6, #F34499, #FC4E23, #F71227)` | Hero, CTAs |
| **Brand Button** | `linear-gradient(135deg, #F34499, #FF4F2E)` | Primary buttons |
| **Warm** | `linear-gradient(135deg, #FF6D49, #FF8A65, #FFB74D)` | Secondary highlights |
| **Coral** | `linear-gradient(135deg, #FC4E23, #FF6D49, #FF8A65)` | Accent backgrounds |
| **Pink to Orange** | `linear-gradient(135deg, #F34499, #FF7B6B, #FF4F2E)` | Gradient text |
| **Page Subtle** | `linear-gradient(180deg, #ffefef 0%, #ffffff 50%)` | Page backgrounds |

### Gradient Text

```css
background: linear-gradient(135deg, #F34499, #FF7B6B, #FF4F2E);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Surfaces

### Light Theme

| Layer | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF8` | Page background |
| Surface | `#FFFFFF` | Cards, panels |
| Muted | `#F5F5F2` | Secondary surfaces |
| Border | `rgba(0, 0, 0, 0.08)` | Dividers, outlines |
| Text | `#1A1A1F` | Primary text |
| Text Muted | `#6B6B76` | Secondary text |

### Dark Theme

| Layer | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A0F` | Page background |
| Surface | `rgba(23, 23, 28, 0.7)` | Cards, panels |
| Muted | `rgba(31, 31, 38, 0.4)` | Secondary surfaces |
| Border | `rgba(255, 255, 255, 0.08)` | Dividers, outlines |
| Text | `#E6E6E6` | Primary text |
| Text Muted | `#A3A3A3` | Secondary text |

---

## Design System Package

For code integration, install the canonical token package:

```bash
npm install @integra/design-system
# or link locally:
npm install ../integra-design-system
```

**Exports:**
- `@integra/design-system` — All tokens (TS)
- `@integra/design-system/tokens.css` — CSS custom properties
- `@integra/design-system/preset` — Tailwind v4 preset
- `@integra/design-system/shadcn` — shadcn/ui theme

**Repository:** [Integra-layer/integra-design-system](https://github.com/Integra-layer/integra-design-system)

---

## Quick Reference

| Element | Value | Token |
|---------|-------|-------|
| Primary Color | `#FF6D49` | `brandColors.primary` |
| Heading Font | Euclid Circular B | `typography.fonts.sans` |
| Data Font | Geist Mono | `typography.fonts.mono` |
| Border Radius | 12px | `radius.lg` |
| Dark Background | `#0A0A0F` | `surfaceColors.dark.background` |
| Brand Gradient | `#FFAFD6 → #F34499 → #FC4E23 → #F71227` | `gradients.brand` |

---

## Drop-in Kit

The `kit/` directory contains ready-to-copy files for instantly aligning any repo:

| File | What it does |
|------|-------------|
| `kit/globals.css` | Tailwind v4 `@theme` with all brand tokens + utility classes (gradient-brand, glass, status-dot) |
| `kit/integra-logo.tsx` | React component — `<IntegraLogo />` with `variant` (mark/full) and `color` (white/pink/brand/dark) props |
| `kit/brand-tokens.css` | Standalone CSS custom properties for non-Tailwind projects (`--integra-brand`, etc.) with dark theme support |
| `kit/brand-tokens.json` | Machine-readable token export — all colors, fonts, gradients, radius, surfaces |
| `kit/postcss.config.mjs` | Required PostCSS config for Tailwind v4 |

### Quick Start (Next.js + Tailwind v4)

```bash
# 1. Copy the essentials
cp kit/globals.css src/app/globals.css
cp kit/integra-logo.tsx src/components/integra-logo.tsx
cp kit/postcss.config.mjs postcss.config.mjs

# 2. Use in your components
import { IntegraLogo } from '@/components/integra-logo'

<IntegraLogo className="h-8" />              // full wordmark
<IntegraLogo variant="mark" className="h-6" /> // icon only
<IntegraLogo color="white" />                 // white on dark
```

### Quick Start (Vanilla CSS / Vue / Svelte)

```bash
# 1. Copy tokens
cp kit/brand-tokens.css src/styles/brand-tokens.css

# 2. Import in your main stylesheet
@import "./brand-tokens.css";

# 3. Use variables
color: var(--integra-brand);
background: var(--integra-gradient-brand);
font-family: var(--integra-font-sans);
```

---

## Claude Code Plugin

This repo includes a Claude Code plugin for brand enforcement. Load it with:

```bash
claude --plugin-dir /path/to/integra-brand
```

### Skills

| Command | Description |
|---------|-------------|
| `/brand-audit` | Scan current project for brand violations — wrong colors, wrong fonts, hardcoded values |
| `/brand-apply` | Apply the brand kit to current project — copies tokens, logo, fixes common violations |
| `/brand-enforce` | Check staged git changes for brand compliance before committing |

### Agent

| Agent | Description |
|-------|-------------|
| `brand-auditor` | Sonnet-powered auditor that scans CSS, components, and configs for brand violations. Reports severity-rated findings table. |

---

## Resources

- [Live Brand Guide](https://integra-brand.vercel.app)
- [Design System Package](https://github.com/Integra-layer/integra-design-system)
- [Official Brand Kit](https://integralayer.com/brandkit)
- [integralayer.com](https://integralayer.com)
