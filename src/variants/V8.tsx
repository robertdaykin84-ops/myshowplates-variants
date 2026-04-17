import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'

// ── 10 colour palettes for the Blueprint layout ───────────────────────────
interface Palette {
  name: string
  bg: string          // page background
  primary: string     // header / dark areas
  accent: string      // highlight colour
  surface: string     // card / section bg
  border: string
  text: string
  muted: string
  gridStroke: string  // SVG grid line colour (hex, no #)
}

const PALETTES: Palette[] = [
  {
    name: 'Navy / Amber',
    bg: '#F8F9FA', primary: '#1E3A5F', accent: '#F59E0B',
    surface: '#EDF2F7', border: '#CBD5E0', text: '#1A202C', muted: '#4A5568',
    gridStroke: '1E3A5F',
  },
  {
    name: 'Forest / Gold',
    bg: '#F5FAF5', primary: '#1A3A2A', accent: '#D4A017',
    surface: '#E8F2E8', border: '#B8D4B8', text: '#0D1F0D', muted: '#3D6B3D',
    gridStroke: '1A3A2A',
  },
  {
    name: 'Charcoal / Cyan',
    bg: '#0D1117', primary: '#1C2B33', accent: '#00D4FF',
    surface: '#161F26', border: '#2A3D4A', text: '#E0F2F8', muted: '#7AA8BC',
    gridStroke: '00D4FF',
  },
  {
    name: 'Deep Purple / Pink',
    bg: '#0E0A1A', primary: '#1E1040', accent: '#E879A0',
    surface: '#160D30', border: '#2E1A5A', text: '#F0E8FF', muted: '#9B7EC8',
    gridStroke: 'E879A0',
  },
  {
    name: 'Slate / Lime',
    bg: '#F2F5F0', primary: '#2A3828', accent: '#7EC850',
    surface: '#E4EDE2', border: '#B8CCBA', text: '#1A241A', muted: '#4A6448',
    gridStroke: '2A3828',
  },
  {
    name: 'Midnight / Orange',
    bg: '#0A0A0A', primary: '#141414', accent: '#FF5A00',
    surface: '#111111', border: '#2A2A2A', text: '#F5F0E8', muted: '#666666',
    gridStroke: 'FF5A00',
  },
  {
    name: 'Racing Green / White',
    bg: '#F0FAF0', primary: '#0A2A0A', accent: '#FFFFFF',
    surface: '#DCF0DC', border: '#A0C8A0', text: '#051405', muted: '#3D6B3D',
    gridStroke: '0A2A0A',
  },
  {
    name: 'Warm Taupe / Rust',
    bg: '#FAF6F1', primary: '#2A1E14', accent: '#C24A1C',
    surface: '#F0E8DC', border: '#D4C4B0', text: '#1A0F0A', muted: '#6B4F3A',
    gridStroke: '2A1E14',
  },
  {
    name: 'Dark Teal / Yellow',
    bg: '#F0FAFA', primary: '#0A2A28', accent: '#FFE44D',
    surface: '#D8F0EE', border: '#90C8C4', text: '#041414', muted: '#2A6B68',
    gridStroke: '0A2A28',
  },
  {
    name: 'Steel / Red',
    bg: '#F5F5F8', primary: '#2A2A38', accent: '#CC0000',
    surface: '#EAEAF0', border: '#C4C4D4', text: '#141420', muted: '#545470',
    gridStroke: '2A2A38',
  },
]

const NAV = ['Create Your Plate', 'About Us', 'Accessories', 'FAQs', 'Design Service', 'Contact Us']

function makeGrid(strokeHex: string) {
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23${strokeHex}' stroke-width='0.4' opacity='0.25'/%3E%3C/svg%3E")`
}

// Swatch strip for picking palette
function PalettePicker({ current, onSelect }: { current: number; onSelect: (i: number) => void }) {
  return (
    <div style={{
      position: 'fixed', bottom: 48, left: '50%', transform: 'translateX(-50%)',
      zIndex: 300, display: 'flex', alignItems: 'center', gap: 6,
      background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)',
      borderRadius: 40, padding: '8px 14px', border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}>
      <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginRight: 6 }}>PALETTE</span>
      {PALETTES.map((p, i) => (
        <button key={i} onClick={() => onSelect(i)} title={p.name} style={{
          width: 22, height: 22, borderRadius: '50%',
          background: p.accent,
          border: current === i ? '2px solid #fff' : '2px solid transparent',
          cursor: 'pointer', transition: 'all 0.15s',
          boxShadow: current === i ? `0 0 0 2px ${p.accent}` : 'none',
          outline: 'none',
        }} />
      ))}
    </div>
  )
}

export function V8() {
  const [paletteIdx, setPaletteIdx] = useState(0)
  const p = PALETTES[paletteIdx]
  const GRID = makeGrid(p.gridStroke)

  // Build a VariantTheme-compatible shape for PlateConfigurator
  const theme = {
    id: 8, name: p.name,
    primary: p.primary, accent: p.accent, surface: p.surface,
    border: p.border, text: p.text, muted: p.muted, bg: p.bg,
    fontHeading: 'IBM Plex Sans', fontBody: 'IBM Plex Sans',
  }

  const isDark = ['Charcoal / Cyan', 'Deep Purple / Pink', 'Midnight / Orange'].includes(p.name)

  return (
    <div style={{ background: `${GRID}, ${p.bg}`, fontFamily: "'IBM Plex Sans', monospace", color: p.text, minHeight: '100vh', transition: 'background 0.35s, color 0.35s' }}>

      {/* TECHNICAL HEADER */}
      <header style={{ background: p.primary, color: '#fff', padding: '0 40px', transition: 'background 0.35s' }}>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', padding: '6px 0', display: 'flex', gap: 32, fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
          {['REV: 2.0', 'DATE: 2026-04-14', 'STANDARD: BSAU 145e', 'SHEET: 1 OF 1'].map(t => <span key={t}>{t}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Logo accentColor={p.accent} textColor="#fff" />
          <nav style={{ display: 'flex', gap: 28 }}>
            {NAV.map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ background: p.accent, color: isDark ? '#fff' : p.primary, padding: '8px 16px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'monospace', filter: p.accent === '#FFFFFF' ? 'brightness(0.85)' : 'none' }}>BASKET [0]</a>
        </div>
      </header>

      {/* TITLE BLOCK */}
      <AnimatePresence mode="wait">
        <motion.section key={paletteIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          style={{ background: p.primary, color: '#fff', padding: '64px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: GRID, opacity: 0.12 }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end', position: 'relative' }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'inline-block', width: 60, height: 1, background: p.accent }} />
                SECTION A — PRODUCT OVERVIEW
                <span style={{ display: 'inline-block', width: 60, height: 1, background: p.accent }} />
              </div>
              <h1 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 64, fontWeight: 700, lineHeight: 1.0, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
                Engineered to<br /><span style={{ color: p.accent }}>British Standard.</span>
              </h1>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                The systematic choice for car-proud owners. Precise. Reliable. Fast.
              </div>
            </div>
            {/* Title block table */}
            <div style={{ border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'monospace', fontSize: 11 }}>
              {[
                ['SPECIFICATION', 'BSAU 145e'],
                ['MATERIAL', 'Acrylic'],
                ['FINISH', 'Retroreflective'],
                ['PRICE', '£27.99'],
                ['DISPATCH', 'Next Day'],
                ['DOCUMENTS', 'Not Required'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '140px 120px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ padding: '6px 10px', color: 'rgba(255,255,255,0.4)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>{k}</span>
                  <span style={{ padding: '6px 10px', color: '#fff', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* OFFER BAR */}
      <div style={{ background: p.accent, padding: '10px 40px', display: 'flex', alignItems: 'center', gap: 16, transition: 'background 0.35s' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.1em', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)' }}>NOTE:</span>
        <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: isDark ? '#fff' : p.primary, filter: p.accent === '#FFFFFF' ? 'brightness(0.6)' : 'none' }}>20% OFF ALL STANDARD PLATES — WAS £34.99, NOW £27.99</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: 10, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)', letterSpacing: '0.08em' }}>{p.name.toUpperCase()}</span>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px' }}>

        {/* Section B header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ background: p.primary, color: '#fff', fontFamily: 'monospace', fontSize: 11, padding: '4px 10px', letterSpacing: '0.1em' }}>SECTION B</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: p.muted, letterSpacing: '0.05em' }}>PLATE CONFIGURATION FORM</div>
          <div style={{ flex: 1, height: 1, background: p.border }} />
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: p.muted }}>SCALE: 1:1</div>
        </div>

        {/* Configurator with blueprint border */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ background: isDark ? p.surface : '#fff', border: `2px solid ${p.primary}`, position: 'relative', padding: 40 }}>
          {[{ top: -4, left: -4 }, { top: -4, right: -4 }, { bottom: -4, left: -4 }, { bottom: -4, right: -4 }].map((pos, i) => (
            <div key={i} style={{ position: 'absolute', width: 8, height: 8, background: p.accent, ...pos }} />
          ))}
          <PlateConfigurator theme={theme} />
        </motion.div>

        {/* Section C */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '40px 0 24px' }}>
          <div style={{ background: p.primary, color: '#fff', fontFamily: 'monospace', fontSize: 11, padding: '4px 10px', letterSpacing: '0.1em' }}>SECTION C</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: p.muted, letterSpacing: '0.05em' }}>TECHNICAL SPECIFICATIONS</div>
          <div style={{ flex: 1, height: 1, background: p.border }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${p.border}` }}>
          {[
            { num: '01', title: 'No Hidden Extras', body: 'Price shown is price paid. Always.' },
            { num: '02', title: 'Trusted Since 2001', body: '23 years of British precision manufacturing.' },
            { num: '03', title: 'Next Day Dispatch', body: 'Order before 2pm for next working day.' },
          ].map((f, i) => (
            <div key={f.num} style={{ padding: 28, borderRight: i < 2 ? `1px solid ${p.border}` : 'none', background: isDark ? p.surface : '#fff' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: p.accent, letterSpacing: '0.15em', marginBottom: 8 }}>{f.num}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 600, marginBottom: 8, color: p.primary }}>{f.title}</div>
              <div style={{ fontSize: 13, color: p.muted, lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </div>

        {/* Section D */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '40px 0 24px' }}>
          <div style={{ background: p.primary, color: '#fff', fontFamily: 'monospace', fontSize: 11, padding: '4px 10px', letterSpacing: '0.1em' }}>SECTION D</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: p.muted }}>CUSTOMER VERIFICATION</div>
          <div style={{ flex: 1, height: 1, background: p.border }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { q: 'Flexi Plate for Trials Bike. Amazing — never have to replace it again.', n: 'Mark Level' },
            { q: 'Plates arrived next day and look absolutely stunning on the car.', n: 'Sarah T.' },
            { q: 'Best show plates I have ever bought. Perfect finish, fast delivery.', n: 'James R.' },
          ].map((t, i) => (
            <div key={i} style={{ background: p.surface, border: `1px solid ${p.border}`, padding: 20 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: p.accent, marginBottom: 8 }}>★★★★★ VERIFIED</div>
              <p style={{ fontSize: 13, color: p.muted, lineHeight: 1.6, margin: '0 0 12px', fontStyle: 'italic' }}>"{t.q}"</p>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: p.primary, margin: 0 }}>— {t.n}</p>
            </div>
          ))}
        </div>

        {/* Footer rule */}
        <div style={{ marginTop: 48, borderTop: `2px solid ${p.primary}`, paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 11, color: p.muted }}>
          <span>© MY SHOW PLATES 2001–2026</span>
          <span>DOCUMENT: MSP-WEB-001 | REV: 2.0 | STATUS: APPROVED</span>
          <span>TERMS | PRIVACY | COOKIES</span>
        </div>
      </div>

      {/* Palette picker strip — fixed above variant switcher */}
      <PalettePicker current={paletteIdx} onSelect={setPaletteIdx} />
    </div>
  )
}
