import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 7, name: 'Neon Rush',
  primary: '#00F0FF', accent: '#7C3AED', surface: 'rgba(255,255,255,0.05)',
  border: 'rgba(0,240,255,0.2)', text: '#FFFFFF', muted: 'rgba(255,255,255,0.5)', bg: '#0D0221',
  fontHeading: 'Urbanist', fontBody: 'Inter',
}

const SECTIONS = ['Home','About','Configurator','Reviews','Contact']

export function V7() {
  const [active, setActive] = useState(0)

  const pages = [

    // SECTION 0 — Landing
    <div key="home" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Animated gradient orbs */}
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)', top: '-10%', right: '-10%', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)', bottom: '10%', left: '5%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'inline-block', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: 20, padding: '6px 18px', fontSize: 12, color: '#00F0FF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 32 }}>
          British Standard · Trusted Since 2001
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.16,1,0.3,1] }}
          style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 96, fontWeight: 800, lineHeight: 0.95, margin: '0 0 32px', textShadow: '0 0 60px rgba(0,240,255,0.3)' }}>
          Your Plate.<br/><span style={{ color: '#00F0FF' }}>Your</span><br/>Rules.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 48, lineHeight: 1.7 }}>
          Stand out. British quality. Ships fast. Zero hidden fees.
        </motion.p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button onClick={() => setActive(2)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="neon-pulse"
            style={{ background: 'transparent', border: '2px solid #00F0FF', color: '#00F0FF', padding: '14px 36px', borderRadius: 4, fontFamily: 'Urbanist, sans-serif', fontWeight: 700, fontSize: 16, cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 200ms' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00F0FF'; (e.currentTarget as HTMLElement).style.color = '#000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#00F0FF' }}>
            Build Your Plate
          </motion.button>
          <motion.button onClick={() => setActive(1)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '14px 36px', borderRadius: 4, fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>
            Learn More
          </motion.button>
        </div>

        {/* Offer badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.4 }}
          style={{ marginTop: 48, display: 'inline-block', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: 8, padding: '10px 24px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
          20% OFF all standard plates — was £34.99, now <strong style={{ color: '#fff' }}>£27.99</strong>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div onClick={() => setActive(1)} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', fontSize: 20 }}>↓</motion.div>
    </div>,

    // SECTION 1 — About / Features
    <div key="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 64, fontWeight: 800, marginBottom: 64, color: '#00F0FF' }}>Why us?</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { title: 'No Hidden Extras', body: 'Price shown is price paid. Always. Unlike our competitors.', icon: '◎' },
            { title: 'Trusted Since 2001', body: '23 years of British precision plate manufacturing.', icon: '◈' },
            { title: 'Next Day Dispatch', body: 'Order before 2pm for next working day delivery.', icon: '◇' },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16,1,0.3,1] }}
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,240,255,0.15)', borderRadius: 16, padding: 36 }}>
              <div style={{ fontSize: 32, color: '#00F0FF', marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{f.body}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <button onClick={() => setActive(2)} style={{ background: '#7C3AED', border: 'none', color: '#fff', padding: '14px 40px', borderRadius: 6, fontFamily: 'Urbanist, sans-serif', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            Configure Your Plate →
          </button>
        </div>
      </div>
    </div>,

    // SECTION 2 — Configurator
    <div key="config" style={{ minHeight: '100vh', padding: '80px 24px', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 48, fontWeight: 800, marginBottom: 8, color: '#00F0FF' }}>Configure.</motion.h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>Select Vehicle Type to begin</p>
        <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,240,255,0.15)', borderRadius: 20, padding: 40 }}>
          <PlateConfigurator theme={theme} />
        </div>
      </div>
    </div>,

    // SECTION 3 — Reviews
    <div key="reviews" style={{ minHeight: '100vh', padding: '80px 24px', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 64, fontWeight: 800, marginBottom: 48 }}>Real reviews.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { q: 'Ordered a Flexi Plate for my Trials Bike. Amazing — never have to replace it again.', n: 'Mark Level' },
            { q: 'Brilliant service, plates arrived next day and look absolutely stunning on the car.', n: 'Sarah T.' },
            { q: 'Best show plates I have ever bought. Perfect finish, fast delivery.', n: 'James R.' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,240,255,0.15)', borderRadius: 16, padding: 32 }}>
              <div style={{ color: '#00F0FF', fontSize: 18, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic' }}>"{t.q}"</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>— {t.n}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>,
  ]

  return (
    <div style={{ background: 'linear-gradient(135deg,#0D0221 0%,#1A0550 50%,#0A1628 100%)', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#fff', position: 'relative' }}>

      {/* GLASS NAV */}
      <nav style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,240,255,0.2)', borderRadius: 40, padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo accentColor="#00F0FF" textColor="#fff" size="sm" />
        {SECTIONS.map((s, i) => (
          <button key={s} onClick={() => setActive(i < 4 ? i : 0)} style={{ background: 'none', border: 'none', color: active === i ? '#00F0FF' : 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'color 150ms', padding: '4px 0', borderBottom: active === i ? '1px solid #00F0FF' : '1px solid transparent' }}>{s}</button>
        ))}
        <button style={{ background: '#7C3AED', border: 'none', color: '#fff', fontSize: 13, fontWeight: 700, padding: '8px 16px', borderRadius: 20, cursor: 'pointer' }}>Basket [0]</button>
      </nav>

      {/* SECTION CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35, ease: [0.4,0,0.2,1] }}>
          {pages[active] || pages[0]}
        </motion.div>
      </AnimatePresence>

      {/* BOTTOM NAV DOTS */}
      <div style={{ position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 10, zIndex: 1000 }}>
        {pages.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ width: 8, height: 8, borderRadius: '50%', border: '1px solid rgba(0,240,255,0.5)', background: active === i ? '#00F0FF' : 'transparent', cursor: 'pointer', padding: 0, transition: 'all 200ms' }} />
        ))}
      </div>
    </div>
  )
}
