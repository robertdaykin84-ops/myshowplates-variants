import { motion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 3, name: 'Clean Speed',
  primary: '#0066FF', accent: '#0066FF', surface: '#F7F9FC',
  border: '#E0E8FF', text: '#0A0A0A', muted: '#6B7280', bg: '#FFFFFF',
  fontHeading: 'Plus Jakarta Sans', fontBody: 'Plus Jakarta Sans',
}

const NAV = ['Create Your Plate','About Us','Accessories','FAQs','Design Service','Contact Us']

export function V3() {
  return (
    <div style={{ background: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0A0A0A' }}>

      {/* EDITORIAL HEADER */}
      <header style={{ borderBottom: '2px solid #0A0A0A', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Logo accentColor="#0066FF" textColor="#0A0A0A" />
          <nav style={{ display: 'flex', gap: 32 }}>
            {NAV.map(l => (
              <a key={l} href="#" style={{ color: '#6B7280', fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'color 150ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0066FF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ background: '#0066FF', color: '#fff', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 4, textDecoration: 'none' }}>Basket [0]</a>
        </div>
        {/* Ticker rule */}
        <div style={{ borderTop: '1px solid #E5E5E5', padding: '8px 0', fontSize: 12, color: '#6B7280', display: 'flex', gap: 32, overflow: 'hidden' }}>
          {['All Sizes In Stock','Trusted Since 2001','No Documents Required','British Standard','Next Day Dispatch'].map(t => (
            <span key={t} style={{ whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </header>

      {/* MAGAZINE LAYOUT: Oversized headline + sticky sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', minHeight: '100vh', borderBottom: '1px solid #E5E5E5' }}>

        {/* LEFT: Editorial content */}
        <div style={{ borderRight: '1px solid #E5E5E5', padding: '64px 48px' }}>

          {/* Category label */}
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#0066FF', textTransform: 'uppercase', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 32, height: 2, background: '#0066FF' }} />
            British Standard Custom Plates
          </div>

          {/* Oversized headline — overflows intentionally */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 88, fontWeight: 800, lineHeight: 0.92, margin: '0 0 48px', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            The Plate<br/>That<br/><span style={{ color: '#0066FF' }}>Proves</span><br/>You Care.
          </motion.h1>

          {/* Rule */}
          <div style={{ height: 2, background: '#0A0A0A', marginBottom: 40 }} />

          {/* 3-col feature row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 64 }}>
            {[
              { num: '01', title: 'No Hidden Extras', body: 'Price shown is price paid. Always.' },
              { num: '02', title: 'Since 2001', body: '23 years of British precision.' },
              { num: '03', title: 'Next Day', body: 'Order before 2pm, ships today.' },
            ].map((f, i) => (
              <motion.div key={f.num} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                <div style={{ fontSize: 11, color: '#0066FF', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 8 }}>{f.num}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{f.body}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 24 }}>Customer Reviews</div>
            {[
              { q: 'Ordered a Flexi Plate for my Trials Bike. Amazing — never have to replace it again.', n: 'Mark Level' },
              { q: 'Plates arrived next day and look absolutely stunning on the car. Will order again.', n: 'Sarah T.' },
            ].map((t, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: 24, marginBottom: 24 }}>
                <div style={{ color: '#0066FF', fontSize: 14, marginBottom: 8 }}>★★★★★</div>
                <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 8px', fontStyle: 'italic' }}>"{t.q}"</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>— {t.n}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Sticky configurator sidebar */}
        <div id="configurator" style={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', padding: 32, borderLeft: '1px solid #E5E5E5', background: '#F7F9FC' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0066FF', marginBottom: 6 }}>Configure</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 24px' }}>Build Your Plate</h2>

          {/* Offer pill */}
          <div style={{ background: '#0066FF', color: '#fff', borderRadius: 6, padding: '10px 16px', fontSize: 13, fontWeight: 700, marginBottom: 24 }}>
            20% OFF — Was £34.99 · Now £27.99
          </div>

          <PlateConfigurator theme={theme} />
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#0A0A0A', color: '#666', padding: '40px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <Logo accentColor="#0066FF" textColor="#fff" size="sm" />
        <span style={{ fontSize: 12 }}>© My Show Plates 2001–2026 | Terms | Privacy | Cookies</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Our Services','Quick Links','Contact Us'].map(l => <a key={l} href="#" style={{ color: '#444', fontSize: 13, textDecoration: 'none' }}>{l}</a>)}
        </div>
      </footer>
    </div>
  )
}
