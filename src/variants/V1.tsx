import { motion } from 'framer-motion'
import type { VariantTheme } from '../types'
import { VARIANTS } from '../types'
import { PlateConfigurator } from '../components/PlateConfigurator'
import { Logo } from '../components/Logo'

const theme: VariantTheme = VARIANTS[0]

// ── V1: Premium Navy (UI/UX Pro Max — mirrors myshowplates.com layout) ──
// Dark sticky nav, full-width hero with overlay, form card below, trust strip

const NAV_LINKS = ['Show Plates', 'Road Legal', 'Gallery', 'Help']

function TrustBadge({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: theme.muted, fontSize: 13, fontFamily: 'Inter, sans-serif' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke={theme.accent} strokeWidth="1.5" />
        <polyline points="4.5,8 7,10.5 11.5,5.5" stroke={theme.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  )
}

export function V1() {
  return (
    <div style={{ background: theme.bg, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Sticky nav */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: theme.primary, borderBottom: `1px solid ${theme.border}` }}>
        {/* Promo bar */}
        <div style={{ background: theme.accent, color: '#000', textAlign: 'center', padding: '7px 16px', fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
          FREE UK DELIVERY ON ALL ORDERS — ORDER BEFORE 2PM FOR SAME DAY DISPATCH
        </div>
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 60, gap: 32 }}>
          <Logo accentColor={theme.accent} textColor={theme.text} size="md" />
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 4 }}>
            {NAV_LINKS.map(link => (
              <button key={link} style={{ padding: '8px 14px', background: 'none', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(240,244,255,0.7)', cursor: 'pointer', borderRadius: 6, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.7)')}>
                {link}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '8px 16px', background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, color: theme.text, cursor: 'pointer' }}>Sign In</button>
            <button style={{ padding: '8px 18px', background: theme.accent, border: 'none', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#000', cursor: 'pointer' }}>
              Basket (0)
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 480, display: 'flex', alignItems: 'center', overflow: 'hidden', background: `linear-gradient(135deg, ${theme.primary} 0%, #0D1836 100%)` }}>
        {/* Decorative diagonal */}
        <div style={{ position: 'absolute', right: -100, top: -100, width: 600, height: 600, background: `${theme.accent}08`, borderRadius: '50%', transform: 'rotate(-30deg)' }} />
        <div style={{ position: 'absolute', right: 80, top: '50%', width: 340, height: 340, background: `${theme.accent}05`, borderRadius: 24, transform: 'translateY(-50%) rotate(12deg)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: theme.accent, marginBottom: 16 }}>
              British Standard BSAU 145e
            </p>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 52, fontWeight: 800, color: theme.text, lineHeight: 1.1, marginBottom: 20 }}>
              Premium Show Plates,<br />
              <span style={{ color: theme.accent }}>Built Your Way</span>
            </h1>
            <p style={{ fontSize: 16, color: theme.muted, lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}>
              Design custom registration plates with your choice of font, border, badge, and slogan. What you see is what you pay — no hidden extras.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ padding: '13px 32px', background: theme.accent, border: 'none', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700, color: '#000', cursor: 'pointer' }}>
                Start Designing
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ padding: '13px 24px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 15, color: theme.text, cursor: 'pointer' }}>
                View Gallery
              </motion.button>
            </div>
          </motion.div>

          {/* Hero plate mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            {/* Front plate */}
            <div style={{ background: '#F2F200', borderRadius: 8, padding: '12px 24px', width: '100%', maxWidth: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: '"Courier New", monospace', fontWeight: 900, fontSize: 40, letterSpacing: 4, color: '#000' }}>AB12 CDE</span>
            </div>
            {/* Rear plate */}
            <div style={{ background: '#fff', borderRadius: 8, padding: '12px 24px', width: '100%', maxWidth: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: '"Courier New", monospace', fontWeight: 900, fontSize: 40, letterSpacing: 4, color: '#000' }}>AB12 CDE</span>
            </div>
            <p style={{ fontSize: 12, color: theme.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Front + Rear Preview</p>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <div style={{ background: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 24px', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['BSAU 145e Certified', 'Same Day Dispatch', 'Royal Mail Tracked', 'Secure Checkout', '12-Month Guarantee'].map(label => (
            <TrustBadge key={label} label={label} />
          ))}
        </div>
      </div>

      {/* Configurator */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 36, fontWeight: 700, color: theme.text, marginBottom: 12 }}>
            Configure Your Plate
          </h2>
          <p style={{ fontSize: 16, color: theme.muted }}>Choose your options below — the price updates instantly.</p>
        </div>
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 16, padding: 40 }}>
          <PlateConfigurator theme={theme} />
        </div>
      </section>

      {/* Feature grid */}
      <section style={{ background: theme.surface, borderTop: `1px solid ${theme.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 30, fontWeight: 700, color: theme.text, textAlign: 'center', marginBottom: 48 }}>Why MyShowPlates?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { title: 'Instant Preview', desc: 'See exactly what your plate looks like before you order.' },
              { title: 'Fast Dispatch', desc: 'Order before 2pm — dispatched same working day.' },
              { title: 'British Made', desc: 'Manufactured in the UK to BSAU 145e specification.' },
              { title: 'No Hidden Costs', desc: 'The price you see is the price you pay. Always.' },
            ].map(card => (
              <div key={card.title} style={{ padding: 24, background: theme.bg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${theme.accent}20`, marginBottom: 16 }} />
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, fontWeight: 700, color: theme.text, marginBottom: 8 }}>{card.title}</p>
                <p style={{ fontSize: 14, color: theme.muted, lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: theme.primary, borderTop: `1px solid ${theme.border}`, padding: '32px 24px', textAlign: 'center' }}>
        <Logo accentColor={theme.accent} textColor={theme.text} size="sm" />
        <p style={{ fontSize: 12, color: theme.muted, marginTop: 16 }}>
          &copy; 2025 MyShowPlates. All rights reserved. BSAU 145e Certified Manufacturer.
        </p>
      </footer>
    </div>
  )
}
