import { motion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 2, name: 'Chrome Matte',
  primary: '#111111', accent: '#E63946', surface: '#1A1A1A',
  border: '#2A2A2A', text: '#FFFFFF', muted: '#666666', bg: '#111111',
  fontHeading: 'Inter', fontBody: 'Inter',
}

const NAV = ['Create Your Plate','About Us','Accessories','FAQs','Design Service','Contact Us']

export function V2() {
  return (
    <div style={{ background: '#111', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif' }}>

      {/* FLOATING NAV */}
      <nav style={{
        position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 100,
        background: 'rgba(17,17,17,0.9)', backdropFilter: 'blur(12px)',
        border: '1px solid #2A2A2A', borderRadius: 40, padding: '10px 24px',
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        <Logo accentColor="#E63946" textColor="#fff" size="sm" />
        {NAV.slice(0, 4).map(l => (
          <a key={l} href="#" style={{ color: '#666', fontSize: 13, textDecoration: 'none', transition: 'color 200ms ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E63946')}
            onMouseLeave={e => (e.currentTarget.style.color = '#666')}>{l}</a>
        ))}
        <a href="#" style={{ background: '#E63946', color: '#fff', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 20, textDecoration: 'none' }}>Basket [0]</a>
      </nav>

      {/* BENTO GRID HERO */}
      <div style={{ padding: '100px 24px 40px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 12 }}>

          {/* Main hero cell */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
            style={{ gridColumn: '1', gridRow: '1 / 3', background: '#1A1A1A', borderRadius: 16, overflow: 'hidden', position: 'relative', minHeight: 480, border: '1px solid #2A2A2A' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }} />
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#E63946' }} />
            <div style={{ position: 'relative', padding: 48, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.0, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Custom<br/>Plates.<br/><span style={{ color: '#E63946' }}>No Extras.</span><br/>No Excuses.
              </h1>
              <p style={{ color: '#666', fontSize: 16, margin: '0 0 28px', lineHeight: 1.6 }}>British Standard. Race-ready. Ships tomorrow.</p>
              <a href="#configurator" style={{ display: 'inline-block', background: '#E63946', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none', alignSelf: 'flex-start' }}>Build Your Plate</a>
            </div>
          </motion.div>

          {/* Stat cells */}
          {[
            { label: 'Years Trading', value: '23+', sub: 'Since 2001' },
            { label: 'Plates Made', value: '500k+', sub: 'And counting' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: [0.4,0,0.2,1] }}
              style={{ background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</span>
              <div>
                <div style={{ fontSize: 52, fontWeight: 800, color: '#E63946', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#444', marginTop: 4 }}>{s.sub}</div>
              </div>
            </motion.div>
          ))}

          {/* Offer cell */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.35 }}
            style={{ background: '#E63946', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, opacity: 0.8 }}>Limited Offer</div>
            <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.1 }}>20%<br/>OFF</div>
            <div style={{ fontSize: 13, marginTop: 8, opacity: 0.9 }}>Was £34.99 → <strong>£27.99</strong></div>
          </motion.div>

          {/* Trust cell */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.45 }}
            style={{ background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A', padding: 32 }}>
            <div style={{ fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Trusted By</div>
            {['No hidden extras','No documents required','British Standard','Next day dispatch'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#E63946', fontSize: 16 }}>✓</span>
                <span style={{ fontSize: 13, color: '#999' }}>{t}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONFIGURATOR */}
        <motion.div id="configurator" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
          style={{ marginTop: 12, background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A', padding: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.01em' }}>Configure Your Plate</h2>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 32 }}>Select Vehicle Type to begin</p>
          <PlateConfigurator theme={theme} />
        </motion.div>

        {/* TESTIMONIALS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>
          {[
            { q: 'Ordered a Flexi Plate for my Trials Bike. Amazing — never have to replace it again.', n: 'Mark Level' },
            { q: 'Brilliant service, plates arrived next day and look absolutely stunning on the car.', n: 'Sarah T.' },
            { q: 'Best show plates I have ever bought. Perfect finish, fast delivery.', n: 'James R.' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A', padding: 28 }}>
              <div style={{ color: '#E63946', fontSize: 16, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: '#999', lineHeight: 1.7, margin: '0 0 16px', fontStyle: 'italic' }}>"{t.q}"</p>
              <p style={{ fontSize: 13, color: '#444', margin: 0 }}>— {t.n}</p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: 12, background: '#1A1A1A', borderRadius: 16, border: '1px solid #2A2A2A', padding: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo accentColor="#E63946" textColor="#fff" size="sm" />
          <span style={{ fontSize: 12, color: '#444' }}>© My Show Plates 2001–2026 | Terms | Privacy | Cookies</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Fitting','FAQs','Contact Us'].map(l => <a key={l} href="#" style={{ color: '#444', fontSize: 13, textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
    </div>
  )
}
