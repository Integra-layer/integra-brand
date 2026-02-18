# Integra Brand Guide & Drop-in Kit

Comprehensive brand guide and drop-in kit for Integra Layer. Contains canonical logos, color palette, typography, gradients, usage rules, and a ready-to-use design token system.

## Stack

- Next.js + TypeScript
- Tailwind CSS
- CSS custom properties (design tokens)
- JSON token exports

## Brand Colors (canonical — source of truth)

### Primary Palette
- Primary: `#FF6D49` (coral-orange)
- Primary Dark: `#FC4E23`
- Primary Light: `#FF8A65`
- Gold: `#FFC17A`
- Pink: `#F34499`
- Pink Light: `#FFAFD6`
- Red: `#F71227`
- Teal: `#00A186`

### Status Colors
- Success: `#1FC16B`
- Warning: `#FA7319`
- Danger: `#FA3748`
- Info: `#335CFF`

### Forbidden Colors (common mistakes)
- `#f97316` (Tailwind orange-500 — NOT Integra brand)
- `#ff6b6b` (generic coral — NOT brand)
- `#22c55e` (Tailwind green-500 — use `#1FC16B`)
- `#eab308` (Tailwind yellow-500 — use `#FA7319`)
- `#ef4444` (Tailwind red-500 — use `#FA3748`)
- `#3b82f6` (Tailwind blue-500 — use `#335CFF`)

## Typography

- **Primary:** Euclid Circular B (headings, body, UI)
- **Monospace:** Geist Mono (addresses, hashes, code, data)
- **Forbidden:** Montserrat, Space Grotesk, Inter, Kode Mono, Arial, Helvetica

## Dark Background

- Canonical: `#0A0A0F`
- Forbidden: `#000000`, `#111111`, `#1a1a2e`, `#0d1117`

## Border Radius

- Cards: `0.75rem` (12px) — `radius.lg`
- Buttons/inputs: `0.375rem` (6px) — `radius.sm`
- Pills: `9999px` — `radius.full`

## Kit Files

- `globals.css` — CSS custom properties with all tokens
- `tokens.json` — JSON export for programmatic use
- Logo component with variants (full, mark, monochrome)

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Development server
npm run build      # Production build
```
