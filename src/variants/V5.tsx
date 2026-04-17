import { motion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 5, name: 'Zero Noise',
  primary: '#171717', accent: '#171717', surface: '#FAFAFA',
  border: '#E5E5E5', text: '#171717', muted: '#737373', bg: '#FFFFFF',
  fontHeading: 'Inter', fontBody: 'Inter',
}

const NAV = ['Create Your Plate','About Us','Accessories','FAQs','Design Service','Contact Us']

export function V5() {
  return (
    <div style={{ background: '#fff', fontFamily: 'Inter, sans-serif', color: '#171717' }}>

      {/* MINIMAL HEADER */}
      <header style={{ padding: '20px 48px', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', zIndex: 100 }}>
        <Logo accentColor="#171717" textColor="#171717" size="sm" />
        <nav style={{ display: 'flex', gap: 32 }}>
          {NAV.map(l => (
            <a key={l} href="#" style={{ color: '#737373', fontSize: 13, textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#171717')}
              onMouseLeave={e => (e.currentTarget.style.color = '#737373')}>{l}</a>
          ))}
        </nav>
        <span style={{ fontSize: 13, color: '#737373' }}>Basket [0]</span>
      </header>

      {/* TYPOGRAPHIC HERO — no images, pure type */}
      <section style={{ maxWidth: 680, margin: '0 auto', padding: '120px 48px 80px', textAlign: 'center' }}>
        <motion.div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#737373', textTransform: 'uppercase', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          <span style={{ display: 'inline-block', width: 40, height: 1, background: '#E5E5E5' }} />
          British Standard Custom Plates Since 2001
          <span style={{ display: 'inline-block', width: 40, height: 1, background: '#E5E5E5' }} />
        </motion.div>

        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.05 }}
          style={{ fontSize: 80, fontWeight: 400, lineHeight: 1.05, margin: '0 0 40px', letterSpacing: '-0.025em', color: '#171717' }}>
          Build Your Plate.
        </motion.h1>

        <motion.div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.1 }}>
          {['No hidden costs','No documents required','Ships tomorrow'].map(t => (
            <span key={t} style={{ fontSize: 12, color: '#737373', padding: '4px 12px', border: '1px solid #E5E5E5', borderRadius: 2 }}>{t}</span>
          ))}
        </motion.div>

        <motion.div style={{ fontSize: 13, color: '#737373' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.15 }}>
          Was <s style={{ color: '#bbb' }}>£34.99</s> — now <strong style={{ color: '#171717' }}>£27.99</strong> · 20% off all standard plates
        </motion.div>
      </section>

      {/* THIN RULE */}
      <div style={{ maxWidth: 680, margin: '0 auto 80px', height: 1, background: '#171717' }} />

      {/* CONFIGURATOR — naked, no chrome */}
      <section id="configurator" style={{ maxWidth: 680, margin: '0 auto', padding: '0 48px 120px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#737373', textTransform: 'uppercase', marginBottom: 32 }}>Configure</div>
        <PlateConfigurator theme={theme} />
      </section>

      {/* FACTS */}
      <section style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', padding: '48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
        {[
          { label: 'Founded', value: '2001' },
          { label: 'Standard', value: 'BSAU 145e' },
          { label: 'Price', value: '£27.99' },
          { label: 'Dispatch', value: 'Next day' },
        ].map((f, i) => (
          <motion.div key={f.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            style={{ padding: '0 32px', borderRight: i < 3 ? '1px solid #E5E5E5' : 'none', textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#737373', textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</div>
            <div style={{ fontSize: 28, fontWeight: 400, color: '#171717' }}>{f.value}</div>
          </motion.div>
        ))}
      </section>

      {/* TESTIMONIALS — plain text list, no cards */}
      <section style={{ maxWidth: 680, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#737373', textTransform: 'uppercase', marginBottom: 32 }}>Reviews</div>
        {[
          { q: 'Ordered a Flexi Plate for my Trials Bike. Amazing — never have to replace it again.', n: 'Mark Level', stars: '★★★★★' },
          { q: 'Brilliant service, plates arrived next day and look absolutely stunning on the car.', n: 'Sarah T.', stars: '★★★★★' },
          { q: 'Best show plates I have ever bought. Perfect finish, fast delivery, no hidden costs.', n: 'James R.', stars: '★★★★★' },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: 28, marginBottom: 28 }}>
            <div style={{ fontSize: 12, color: '#171717', marginBottom: 8 }}>{t.stars}</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 8px', color: '#171717' }}>{t.q}</p>
            <p style={{ fontSize: 12, color: '#737373', margin: 0 }}>— {t.n}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER — one line */}
      <footer style={{ borderTop: '1px solid #E5E5E5', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#737373' }}>© My Show Plates 2001–2026</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Terms','Privacy','Cookies','FAQs','Contact'].map(l => <a key={l} href="#" style={{ color: '#737373', fontSize: 12, textDecoration: 'none' }}>{l}</a>)}
        </div>
      </footer>
    </div>
  )
}
