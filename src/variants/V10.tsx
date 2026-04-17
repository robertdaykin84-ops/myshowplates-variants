import { motion } from 'framer-motion'
import type { VariantTheme } from '../types'
import { VARIANTS } from '../types'
import { PlateConfigurator } from '../components/PlateConfigurator'
import { Logo } from '../components/Logo'

const theme: VariantTheme = VARIANTS[9]

// ── V10: Cinematic Dark (AI System Prompts / Cormorant) ───────────────────
// Film-frame layout: black letterbox bars top + bottom, gold gradient type,
// full-bleed sections, Cormorant Garamond italic, film grain overlay

function FilmGrain() {
  return (
    <svg style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9998, opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
      <filter id="v10grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#v10grain)" />
    </svg>
  )
}

// Cinematic letterbox bar
function Letterbox({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div style={{
      position: 'fixed',
      [position]: 0,
      left: 0,
      right: 0,
      height: 48,
      background: '#000',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 32,
      paddingRight: 32,
      justifyContent: position === 'top' ? 'space-between' : 'center',
    }}>
      {position === 'top' ? (
        <>
          <Logo accentColor="#BF953F" textColor="#F5F0E8" size="sm" />
          <div style={{ display: 'flex', gap: 24 }}>
            {['Gallery', 'Pricing', 'About'].map(item => (
              <button key={item} style={{ background: 'none', border: 'none', fontFamily: 'Cormorant Garamond, serif', fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', cursor: 'pointer' }}>{item}</button>
            ))}
            <button style={{ padding: '4px 18px', border: '1px solid rgba(191,149,63,0.5)', borderRadius: 2, background: 'transparent', fontFamily: 'Cormorant Garamond, serif', fontSize: 15, color: '#BF953F', cursor: 'pointer', letterSpacing: '0.08em' }}>Order</button>
          </div>
        </>
      ) : (
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)' }}>
          MyShowPlates &nbsp;·&nbsp; British Standard &nbsp;·&nbsp; Est. 2010
        </span>
      )}
    </div>
  )
}

// Gold gradient text component
function GoldText({ children, size = 64, style = {} }: { children: React.ReactNode; size?: number; style?: React.CSSProperties }) {
  return (
    <span style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: size,
      lineHeight: 1.1,
      background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 35%, #B38728 60%, #FBF5B7 80%, #AA771C 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      ...style,
    }}>
      {children}
    </span>
  )
}

// Horizontal rule with dot
function CinematicDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0' }}>
      <div style={{ flex: 1, height: 1, background: 'rgba(191,149,63,0.25)' }} />
      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#BF953F', opacity: 0.6 }} />
      <div style={{ flex: 1, height: 1, background: 'rgba(191,149,63,0.25)' }} />
    </div>
  )
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <GoldText size={42}>{number}</GoldText>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginTop: 4 }}>{label}</p>
    </div>
  )
}

export function V10() {
  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh' }}>
      <FilmGrain />
      <Letterbox position="top" />
      <Letterbox position="bottom" />

      {/* Content inset for letterbox */}
      <div style={{ paddingTop: 48, paddingBottom: 48 }}>

        {/* Hero — full bleed */}
        <section style={{ position: 'relative', minHeight: 'calc(100vh - 96px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Atmospheric gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(191,149,63,0.08) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #050505)' }} />

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', zIndex: 1, padding: '0 32px', maxWidth: 900 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(191,149,63,0.7)', marginBottom: 24 }}>
              Premium Registration Plates
            </p>
            <GoldText size={80} style={{ marginBottom: 20 }}>
              What You See
            </GoldText>
            <GoldText size={80} style={{ marginBottom: 32 }}>
              Is What You Pay.
            </GoldText>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,240,232,0.55)', lineHeight: 1.6, marginBottom: 48 }}>
              No hidden extras. British Standard quality.<br />Ships within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '14px 48px', background: 'transparent', border: '1px solid rgba(191,149,63,0.6)', borderRadius: 2, fontFamily: 'Cormorant Garamond, serif', fontSize: 18, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BF953F', cursor: 'pointer' }}
            >
              Configure Your Plate
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)' }}>Scroll</p>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(191,149,63,0.5), transparent)' }} />
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ borderTop: '1px solid rgba(191,149,63,0.15)', borderBottom: '1px solid rgba(191,149,63,0.15)', padding: '40px 32px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            <StatBlock number="50k+" label="Plates Made" />
            <StatBlock number="24hr" label="Dispatch" />
            <StatBlock number="BSAU" label="145e Standard" />
            <StatBlock number="4.9" label="Avg. Rating" />
          </div>
        </section>

        {/* Configurator section */}
        <section style={{ padding: '80px 32px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(191,149,63,0.5)', marginBottom: 16 }}>
              Step 01 / Configuration
            </p>
            <GoldText size={52}>Design Your Plate</GoldText>
            <CinematicDivider />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontStyle: 'italic', color: 'rgba(245,240,232,0.4)', marginTop: -16 }}>
              Every detail, exactly as you want it.
            </p>
          </div>

          {/* Two-column: aside + configurator */}
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48, alignItems: 'start' }}>
            {/* Left editorial column */}
            <div style={{ position: 'sticky', top: 80 }}>
              <div style={{ padding: '32px 24px', border: '1px solid rgba(191,149,63,0.2)', borderRadius: 2 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(191,149,63,0.5)', marginBottom: 16 }}>Why MyShowPlates</p>
                {[
                  { title: 'Precision manufacture', body: 'CNC-routed acrylic, UV-stable 3M vinyl, laser engraving options.' },
                  { title: 'Bespoke to you', body: 'Choose font, border, badge, slogan. Preview before you buy.' },
                  { title: 'Road legal option', body: 'Full BSAU 145e compliance if you need it.' },
                  { title: 'Fast dispatch', body: 'Order before 2pm and we ship the same day.' },
                ].map(item => (
                  <div key={item.title} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(245,240,232,0.06)' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 17, color: '#BF953F', marginBottom: 6 }}>{item.title}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.6, color: 'rgba(245,240,232,0.4)' }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right configurator */}
            <div style={{ border: '1px solid rgba(191,149,63,0.2)', borderRadius: 2, padding: 32 }}>
              <PlateConfigurator theme={theme} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '80px 32px', textAlign: 'center', borderTop: '1px solid rgba(191,149,63,0.15)' }}>
          <GoldText size={48} style={{ marginBottom: 20 }}>
            Ready to order?
          </GoldText>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontStyle: 'italic', color: 'rgba(245,240,232,0.4)', marginBottom: 36 }}>
            Configure your plate above and add to basket.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 40, height: 1, background: 'rgba(191,149,63,0.3)' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(191,149,63,0.5)' }}>Secure checkout</span>
            <div style={{ width: 40, height: 1, background: 'rgba(191,149,63,0.3)' }} />
          </div>
        </section>
      </div>
    </div>
  )
}
