import { useState, useEffect } from 'react'
import type { VariantTheme } from '../types'
import { VARIANTS } from '../types'
import { PlateConfigurator } from '../components/PlateConfigurator'
import { Logo } from '../components/Logo'

const theme: VariantTheme = VARIANTS[8]

// ── V9: Documentation Layout (Figma TC-EBC / Structured Teal) ──────────────
// Left sticky ToC + numbered sections like a product specification document
// Inspired by: Apple developer docs, Stripe docs, Figma plugin specs

const SECTIONS = [
  { id: 's01', label: '01 — Overview', anchor: 'overview' },
  { id: 's02', label: '02 — Plate Standards', anchor: 'standards' },
  { id: 's03', label: '03 — Configure Your Plate', anchor: 'configurator' },
  { id: 's04', label: '04 — Delivery & Guarantee', anchor: 'delivery' },
]

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', borderBottom: `1px solid ${theme.border}`, padding: '10px 0', gap: 16 }}>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.muted, width: 180, flexShrink: 0 }}>{label}</span>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: theme.text }}>{value}</span>
    </div>
  )
}

function TagBadge({ children }: { children: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', borderRadius: 4, background: `${theme.accent}18`, border: `1px solid ${theme.accent}40`, fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, color: theme.accent, marginRight: 8 }}>
      {children}
    </span>
  )
}

export function V9() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.anchor)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s.anchor)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: theme.bg, minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Top bar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: theme.bg, borderBottom: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 56 }}>
        <Logo accentColor={theme.accent} textColor={theme.text} size="sm" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TagBadge>British Standard</TagBadge>
          <TagBadge>Next Day Delivery</TagBadge>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={{ padding: '7px 16px', borderRadius: 6, border: `1px solid ${theme.border}`, background: 'transparent', fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: theme.text, cursor: 'pointer' }}>Sign In</button>
          <button style={{ padding: '7px 16px', borderRadius: 6, border: 'none', background: theme.accent, fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff', cursor: 'pointer' }}>Order Now</button>
        </div>
      </header>

      <div style={{ display: 'flex', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Left sticky ToC */}
        <aside style={{ width: 220, flexShrink: 0, position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto', paddingTop: 40, paddingRight: 24 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.muted, marginBottom: 12 }}>On this page</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.anchor)} style={{ textAlign: 'left', padding: '7px 10px', borderRadius: 6, border: 'none', background: activeSection === s.anchor ? `${theme.accent}14` : 'transparent', fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: activeSection === s.anchor ? 600 : 400, color: activeSection === s.anchor ? theme.accent : theme.muted, cursor: 'pointer', borderLeft: activeSection === s.anchor ? `2px solid ${theme.accent}` : '2px solid transparent', transition: 'all 0.15s' }}>
                {s.label}
              </button>
            ))}
          </nav>

          <div style={{ marginTop: 40, padding: '16px', background: theme.surface, borderRadius: 8, border: `1px solid ${theme.border}` }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.muted, marginBottom: 8 }}>Version</p>
            <p style={{ fontSize: 13, color: theme.text }}>DVLA Spec 2024</p>
            <p style={{ fontSize: 11, color: theme.muted, marginTop: 4 }}>Last updated Apr 2025</p>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, padding: '48px 0 80px 48px', borderLeft: `1px solid ${theme.border}` }}>

          {/* Section 01 — Overview */}
          <section id="overview" style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.accent }}>01</span>
              <div style={{ height: 1, flex: 1, background: theme.border }} />
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 700, color: theme.text, lineHeight: 1.15, marginBottom: 16 }}>
              Custom Show Plates
              <br />
              <span style={{ color: theme.accent }}>Built to British Standard</span>
            </h1>
            <p style={{ fontSize: 16, color: theme.muted, lineHeight: 1.7, maxWidth: 600, marginBottom: 32 }}>
              MyShowPlates manufactures premium registration plates to BSAU 145e standard. Every plate is individually produced, quality-checked, and dispatched within 24 hours. No fuss. No surprises.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['BSAU 145e Certified', 'Same Day Dispatch', 'UK Road Legal', 'Acrylic + 3M Vinyl'].map(tag => (
                <span key={tag} style={{ padding: '6px 14px', borderRadius: 999, border: `1px solid ${theme.border}`, fontSize: 13, color: theme.text }}>{tag}</span>
              ))}
            </div>
          </section>

          {/* Section 02 — Plate Standards */}
          <section id="standards" style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.accent }}>02</span>
              <div style={{ height: 1, flex: 1, background: theme.border }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: theme.text, marginBottom: 24 }}>Plate Standards & Specifications</h2>

            <div style={{ background: theme.surface, borderRadius: 10, border: `1px solid ${theme.border}`, padding: '0 24px', marginBottom: 32 }}>
              <SpecRow label="Standard" value="BSAU 145e (current UK road-legal standard)" />
              <SpecRow label="Material" value="3mm acrylic with 3M retroreflective vinyl" />
              <SpecRow label="Font" value="Charles Wright (mandatory) — optional display fonts for show plates" />
              <SpecRow label="Front plate" value="White background, black characters" />
              <SpecRow label="Rear plate" value="Yellow background, black characters" />
              <SpecRow label="Standard car size" value="20.5 × 4.4 in (520 × 111 mm)" />
              <SpecRow label="Motorcycle size" value="9 × 7 in (228 × 178 mm)" />
              <SpecRow label="Lettering height" value="79 mm minimum" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { title: 'Show Plates', desc: 'Display fonts, colours, and designs permitted. Not for public road use.' },
                { title: 'Road Legal', desc: 'Must conform to BSAU 145e. Charles Wright font, no tinted backgrounds.' },
              ].map(card => (
                <div key={card.title} style={{ padding: 20, background: theme.bg, border: `1px solid ${theme.border}`, borderRadius: 8 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: theme.text, marginBottom: 6 }}>{card.title}</p>
                  <p style={{ fontSize: 13, color: theme.muted, lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03 — Configurator */}
          <section id="configurator" style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.accent }}>03</span>
              <div style={{ height: 1, flex: 1, background: theme.border }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: theme.text, marginBottom: 8 }}>Configure Your Plate</h2>
            <p style={{ fontSize: 14, color: theme.muted, marginBottom: 28 }}>Complete the specification form below. All fields marked are required for production.</p>

            <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ padding: '12px 24px', borderBottom: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: theme.muted }}>Plate Configuration Form</span>
                <span style={{ fontSize: 12, color: theme.muted }}>All fields required</span>
              </div>
              <div style={{ padding: 24 }}>
                <PlateConfigurator theme={theme} />
              </div>
            </div>
          </section>

          {/* Section 04 — Delivery */}
          <section id="delivery" style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.accent }}>04</span>
              <div style={{ height: 1, flex: 1, background: theme.border }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: theme.text, marginBottom: 24 }}>Delivery & Guarantee</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { label: 'Dispatch', value: 'Same working day before 2pm', icon: '→' },
                { label: 'Delivery', value: 'Royal Mail 48hr tracked', icon: '→' },
                { label: 'Guarantee', value: '12-month manufacturing warranty', icon: '→' },
              ].map(item => (
                <div key={item.label} style={{ padding: 20, background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${theme.accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 16, color: theme.accent }}>{item.icon}</div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.muted, marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: theme.text }}>{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
