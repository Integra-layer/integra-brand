/* eslint-disable @next/next/no-img-element */

const BRAND_COLORS = [
  { name: "Primary", hex: "#FF6D49", desc: "Coral-orange — flagship brand color" },
  { name: "Primary Dark", hex: "#FC4E23", desc: "Hover / active states" },
  { name: "Primary Light", hex: "#FF8A65", desc: "Subtle accents" },
  { name: "Gold", hex: "#FFC17A", desc: "Warm accent" },
  { name: "Pink", hex: "#F34499", desc: "Secondary brand accent" },
  { name: "Pink Light", hex: "#FFAFD6", desc: "Gradient start" },
  { name: "Red", hex: "#F71227", desc: "Gradient end" },
  { name: "Teal", hex: "#00A186", desc: "Contrast accent" },
];

const STATUS_COLORS = [
  { name: "Success", hex: "#1FC16B", desc: "Positive states, online" },
  { name: "Warning", hex: "#FA7319", desc: "Caution, pending" },
  { name: "Danger", hex: "#FA3748", desc: "Errors, destructive" },
  { name: "Info", hex: "#335CFF", desc: "Information, links" },
];

const NEUTRAL_COLORS = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray 50", hex: "#FAFAF8" },
  { name: "Gray 100", hex: "#F5F5F2" },
  { name: "Gray 200", hex: "#E5E7EB" },
  { name: "Gray 300", hex: "#D1D5DB" },
  { name: "Gray 400", hex: "#9CA3AF" },
  { name: "Gray 500", hex: "#6B7280" },
  { name: "Gray 600", hex: "#4B5563" },
  { name: "Gray 700", hex: "#374151" },
  { name: "Gray 800", hex: "#1F2937" },
  { name: "Gray 900", hex: "#111827" },
  { name: "Black", hex: "#0A0A0F" },
];

const GRADIENTS = [
  {
    name: "Brand",
    css: "linear-gradient(135deg, #FFAFD6, #F34499, #FC4E23, #F71227)",
    desc: "Hero sections, CTAs, key visuals",
  },
  {
    name: "Brand Button",
    css: "linear-gradient(135deg, #F34499, #FF4F2E)",
    desc: "Primary buttons, action elements",
  },
  {
    name: "Warm",
    css: "linear-gradient(135deg, #FF6D49, #FF8A65, #FFB74D)",
    desc: "Secondary highlights",
  },
  {
    name: "Coral",
    css: "linear-gradient(135deg, #FC4E23, #FF6D49, #FF8A65)",
    desc: "Accent backgrounds",
  },
  {
    name: "Pink to Orange",
    css: "linear-gradient(135deg, #F34499, #FF7B6B, #FF4F2E)",
    desc: "Gradient text, accent borders",
  },
  {
    name: "Page Subtle",
    css: "linear-gradient(180deg, #ffefef 0%, #ffffff 50%)",
    desc: "Subtle page backgrounds",
  },
];

const CHART_COLORS = [
  { name: "Series 1", hex: "#FF6D49" },
  { name: "Series 2", hex: "#F34499" },
  { name: "Series 3", hex: "#335CFF" },
  { name: "Series 4", hex: "#1FC16B" },
  { name: "Series 5", hex: "#FFC17A" },
  { name: "Series 6", hex: "#A855F7" },
];

function ColorSwatch({
  hex,
  name,
  desc,
  large,
}: {
  hex: string;
  name: string;
  desc?: string;
  large?: boolean;
}) {
  const isLight =
    hex === "#FFFFFF" || hex === "#FAFAF8" || hex === "#F5F5F2" || hex === "#E5E7EB";
  return (
    <div className="swatch group">
      <div
        className={`rounded-xl ${large ? "h-28" : "h-20"} ${isLight ? "border border-gray-200" : ""}`}
        style={{ backgroundColor: hex }}
      />
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-text">{name}</span>
          <code className="text-xs text-text-muted font-mono">{hex}</code>
        </div>
        {desc && <p className="text-xs text-text-subtle mt-0.5">{desc}</p>}
      </div>
    </div>
  );
}

function SectionTitle({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10" id={id}>
      <h2 className="text-3xl font-bold text-text">{title}</h2>
      <p className="text-text-muted mt-1">{subtitle}</p>
      <div className="h-1 w-16 gradient-brand rounded-full mt-4" />
    </div>
  );
}

function LogoCard({
  src,
  label,
  bg,
  textColor,
}: {
  src: string;
  label: string;
  bg: string;
  textColor: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div
        className="flex items-center justify-center p-10"
        style={{ background: bg, minHeight: 160 }}
      >
        <img src={src} alt={label} className="max-h-16" />
      </div>
      <div className="px-4 py-3 bg-surface-card border-t border-border">
        <span className="text-sm font-medium" style={{ color: textColor }}>
          {label}
        </span>
        <a
          href={src}
          download
          className="text-xs text-brand ml-2 hover:underline"
        >
          Download SVG
        </a>
      </div>
    </div>
  );
}

export default function BrandGuidePage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/integra-mark.svg" alt="Integra" className="h-8 w-8" />
            <span className="font-bold text-lg text-text">Brand Guide</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-text-muted">
            <a href="#logos" className="hover:text-brand transition-colors">
              Logos
            </a>
            <a href="#colors" className="hover:text-brand transition-colors">
              Colors
            </a>
            <a href="#typography" className="hover:text-brand transition-colors">
              Typography
            </a>
            <a href="#gradients" className="hover:text-brand transition-colors">
              Gradients
            </a>
            <a href="#usage" className="hover:text-brand transition-colors">
              Usage
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <header className="gradient-brand py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/logos/integra-wordmark-white.svg"
            alt="Integra"
            className="h-14 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brand Guidelines
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            The official visual identity reference for the Integralayer ecosystem.
            Logos, colors, typography, and usage rules.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* ─── Logos ─── */}
        <section>
          <SectionTitle
            id="logos"
            title="Logo"
            subtitle="The Integra pinwheel mark and wordmark in all approved variants."
          />

          <h3 className="text-lg font-semibold mb-4">Icon Mark</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <LogoCard
              src="/logos/integra-mark.svg"
              label="Primary (Coral)"
              bg="#FAFAF8"
              textColor="#1A1A1F"
            />
            <LogoCard
              src="/logos/integra-mark-pink.svg"
              label="Pink"
              bg="#FAFAF8"
              textColor="#1A1A1F"
            />
            <LogoCard
              src="/logos/integra-mark-dark.svg"
              label="Dark"
              bg="#FAFAF8"
              textColor="#1A1A1F"
            />
            <LogoCard
              src="/logos/integra-mark-white.svg"
              label="White (on dark)"
              bg="#0A0A0F"
              textColor="#1A1A1F"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4">Full Wordmark</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <LogoCard
              src="/logos/integra-wordmark-dark.svg"
              label="Dark wordmark (on light)"
              bg="#FAFAF8"
              textColor="#1A1A1F"
            />
            <LogoCard
              src="/logos/integra-wordmark-white.svg"
              label="White wordmark (on dark)"
              bg="#0A0A0F"
              textColor="#1A1A1F"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4">App Icon</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LogoCard
              src="/logos/integra-icon-app.svg"
              label="App icon (rounded)"
              bg="#E5E7EB"
              textColor="#1A1A1F"
            />
          </div>
        </section>

        {/* ─── Colors ─── */}
        <section>
          <SectionTitle
            id="colors"
            title="Color Palette"
            subtitle="Canonical brand, semantic, neutral, and chart colors for all Integra products."
          />

          <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {BRAND_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} large />
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Status Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {STATUS_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} large />
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Neutral Scale</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10">
            {NEUTRAL_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Chart / Data Visualization</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {CHART_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>
        </section>

        {/* ─── Typography ─── */}
        <section>
          <SectionTitle
            id="typography"
            title="Typography"
            subtitle="Euclid Circular B for all headings and body text. Geist Mono for blockchain data and code."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-xl border border-border p-8 bg-surface-card">
              <p className="text-xs uppercase tracking-wider text-text-subtle mb-4 font-semibold">
                Primary — Euclid Circular B
              </p>
              <p className="text-5xl font-bold text-text mb-2">Aa</p>
              <p className="text-2xl text-text mb-4">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-2xl text-text-muted mb-4">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-xl text-text-subtle">0123456789 !@#$%&amp;</p>
            </div>
            <div className="rounded-xl border border-border p-8 bg-surface-card">
              <p className="text-xs uppercase tracking-wider text-text-subtle mb-4 font-semibold">
                Monospace — Geist Mono
              </p>
              <p className="text-5xl font-bold text-text font-mono mb-2">Aa</p>
              <p className="text-2xl text-text font-mono mb-4">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-2xl text-text-muted font-mono mb-4">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-xl text-text-subtle font-mono">
                0123456789 0x5551...48fb
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Type Scale</h3>
          <div className="rounded-xl border border-border bg-surface-card overflow-hidden">
            {[
              { label: "7xl — Hero", size: "text-7xl", weight: "font-bold", sample: "110px" },
              { label: "5xl — Page Title", size: "text-5xl", weight: "font-bold", sample: "48px" },
              { label: "3xl — Section", size: "text-3xl", weight: "font-bold", sample: "30px" },
              { label: "xl — Subtitle", size: "text-xl", weight: "font-semibold", sample: "20px" },
              { label: "base — Body", size: "text-base", weight: "font-normal", sample: "16px" },
              { label: "sm — Caption", size: "text-sm", weight: "font-normal", sample: "14px" },
              { label: "xs — Label", size: "text-xs", weight: "font-medium", sample: "12px" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-baseline justify-between px-8 py-5 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className={`${row.size} ${row.weight} text-text`}>
                  Integralayer
                </span>
                <span className="text-xs text-text-subtle font-mono shrink-0 ml-4">
                  {row.label} · {row.sample}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-10 mb-4">Font Weights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { weight: "font-normal", label: "Regular 400" },
              { weight: "font-medium", label: "Medium 500" },
              { weight: "font-semibold", label: "Semibold 600" },
              { weight: "font-bold", label: "Bold 700" },
            ].map((w) => (
              <div
                key={w.label}
                className="rounded-xl border border-border p-6 bg-surface-card text-center"
              >
                <p className={`text-2xl ${w.weight} text-text mb-2`}>Integra</p>
                <p className="text-xs text-text-subtle font-mono">{w.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Gradients ─── */}
        <section>
          <SectionTitle
            id="gradients"
            title="Gradients"
            subtitle="Signature gradient combinations for hero sections, buttons, text effects, and accents."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {GRADIENTS.map((g) => (
              <div key={g.name} className="swatch rounded-xl overflow-hidden border border-border">
                <div
                  className="h-32 rounded-t-xl"
                  style={{ background: g.css }}
                />
                <div className="p-4 bg-surface-card">
                  <p className="font-semibold text-text">{g.name}</p>
                  <p className="text-xs text-text-muted mt-1">{g.desc}</p>
                  <code className="text-xs text-text-subtle font-mono block mt-2 break-all">
                    {g.css}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Gradient Text</h3>
          <div className="rounded-xl border border-border p-10 bg-surface-card text-center">
            <p className="text-5xl font-bold gradient-brand-text">
              Built for Real-World Assets
            </p>
            <code className="text-xs text-text-subtle font-mono mt-4 block">
              background: linear-gradient(135deg, #F34499, #FF7B6B, #FF4F2E)
              · background-clip: text
            </code>
          </div>
        </section>

        {/* ─── Surfaces ─── */}
        <section>
          <SectionTitle
            id="surfaces"
            title="Surfaces"
            subtitle="Light and dark theme surface hierarchy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Light Theme</h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="p-6" style={{ background: "#FAFAF8" }}>
                  <p className="text-sm font-mono text-text-subtle mb-1">
                    Background · #FAFAF8
                  </p>
                  <div className="rounded-lg p-5 mt-3 border" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)" }}>
                    <p className="text-sm font-mono text-text-subtle mb-1">
                      Surface · #FFFFFF
                    </p>
                    <div className="rounded-md p-4 mt-3" style={{ background: "#F5F5F2" }}>
                      <p className="text-sm font-mono text-text-subtle">
                        Muted · #F5F5F2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Dark Theme</h3>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="p-6" style={{ background: "#0A0A0F" }}>
                  <p className="text-sm font-mono" style={{ color: "#6C757D" }}>
                    Background · #0A0A0F
                  </p>
                  <div className="rounded-lg p-5 mt-3" style={{ background: "rgba(23,23,28,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-sm font-mono" style={{ color: "#A3A3A3" }}>
                      Surface · rgba(23, 23, 28, 0.7)
                    </p>
                    <div className="rounded-md p-4 mt-3" style={{ background: "rgba(31,31,38,0.4)" }}>
                      <p className="text-sm font-mono" style={{ color: "#6C757D" }}>
                        Muted · rgba(31, 31, 38, 0.4)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <SectionTitle
            id="usage"
            title="Usage Guidelines"
            subtitle="Rules for using the Integra brand consistently across all products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do */}
            <div className="rounded-xl border-2 border-success/30 bg-success/5 p-6">
              <h3 className="text-lg font-semibold text-success mb-4">Do</h3>
              <ul className="space-y-3 text-sm text-text">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Use the pinwheel mark at 24px minimum size
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Maintain clear space of at least 1x the mark height
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Use white logo on dark backgrounds, dark logo on light
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Use the brand gradient for hero sections and CTAs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Use Euclid Circular B for all UI text, Geist Mono for data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-0.5">&#10003;</span>
                  Reference the @integra/design-system package for tokens
                </li>
              </ul>
            </div>

            {/* Don't */}
            <div className="rounded-xl border-2 border-danger/30 bg-danger/5 p-6">
              <h3 className="text-lg font-semibold text-danger mb-4">
                Don&apos;t
              </h3>
              <ul className="space-y-3 text-sm text-text">
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Stretch, rotate, or distort the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Place the logo on busy or low-contrast backgrounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Use unapproved colors for the mark
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Add effects like drop shadows or outlines to the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Use Montserrat, Space Grotesk, or other substitute fonts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger mt-0.5">&#10007;</span>
                  Hardcode hex values — always use design system tokens
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-border p-8 bg-surface-card">
            <h3 className="text-lg font-semibold mb-4">Quick Reference</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-text-muted font-medium">
                      Element
                    </th>
                    <th className="text-left py-3 pr-4 text-text-muted font-medium">
                      Value
                    </th>
                    <th className="text-left py-3 text-text-muted font-medium">
                      Token
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Primary Color</td>
                    <td className="py-3 pr-4 font-mono text-xs">#FF6D49</td>
                    <td className="py-3 font-mono text-xs">brandColors.primary</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Heading Font</td>
                    <td className="py-3 pr-4 font-mono text-xs">Euclid Circular B</td>
                    <td className="py-3 font-mono text-xs">typography.fonts.sans</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Data Font</td>
                    <td className="py-3 pr-4 font-mono text-xs">Geist Mono</td>
                    <td className="py-3 font-mono text-xs">typography.fonts.mono</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Border Radius</td>
                    <td className="py-3 pr-4 font-mono text-xs">0.75rem (12px)</td>
                    <td className="py-3 font-mono text-xs">radius.lg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Dark Background</td>
                    <td className="py-3 pr-4 font-mono text-xs">#0A0A0F</td>
                    <td className="py-3 font-mono text-xs">surfaceColors.dark.background</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Brand Gradient</td>
                    <td className="py-3 pr-4 font-mono text-xs">#FFAFD6 → #F34499 → #FC4E23 → #F71227</td>
                    <td className="py-3 font-mono text-xs">gradients.brand</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Downloads ─── */}
        <section>
          <SectionTitle
            id="downloads"
            title="Downloads"
            subtitle="All brand assets available for download."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { file: "integra-mark.svg", label: "Icon Mark (Primary)" },
              { file: "integra-mark-white.svg", label: "Icon Mark (White)" },
              { file: "integra-mark-pink.svg", label: "Icon Mark (Pink)" },
              { file: "integra-mark-dark.svg", label: "Icon Mark (Dark)" },
              { file: "integra-wordmark-dark.svg", label: "Wordmark (Dark)" },
              { file: "integra-wordmark-white.svg", label: "Wordmark (White)" },
              { file: "integra-icon-app.svg", label: "App Icon" },
            ].map((asset) => (
              <a
                key={asset.file}
                href={`/logos/${asset.file}`}
                download
                className="flex items-center gap-3 rounded-xl border border-border p-4 bg-surface-card hover:border-brand/40 transition-colors"
              >
                <img
                  src={`/logos/${asset.file}`}
                  alt={asset.label}
                  className="h-10 w-10"
                />
                <div>
                  <p className="text-sm font-medium text-text">{asset.label}</p>
                  <p className="text-xs text-text-subtle">.svg</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border p-6 bg-surface-card">
            <p className="text-sm text-text-muted">
              <strong>Design System Package:</strong> For code tokens, Tailwind
              preset, and shadcn theme, install{" "}
              <code className="text-xs bg-surface-muted px-2 py-1 rounded font-mono">
                @integra/design-system
              </code>{" "}
              from the{" "}
              <a
                href="https://github.com/Integra-layer/integra-design-system"
                className="text-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                integra-design-system
              </a>{" "}
              repository.
            </p>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logos/integra-mark.svg" alt="" className="h-6 w-6" />
            <span className="text-sm text-text-muted">
              Integralayer Brand Guide
            </span>
          </div>
          <div className="flex gap-6 text-sm text-text-subtle">
            <a
              href="https://integralayer.com"
              className="hover:text-brand transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              integralayer.com
            </a>
            <a
              href="https://integralayer.com/brandkit"
              className="hover:text-brand transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Brand Kit
            </a>
            <a
              href="https://github.com/Integra-layer/integra-design-system"
              className="hover:text-brand transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Design System
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
