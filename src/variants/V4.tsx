import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import { PlatePreview } from '../components/PlatePreview'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 4, name: 'Warm Trust',
  primary: '#FF6B35', accent: '#FF6B35', surface: '#FFFFFF',
  border: '#FDE8DF', text: '#1A202C', muted: '#718096', bg: '#FAFAF8',
  fontHeading: 'Nunito', fontBody: 'Inter',
}

const NAV = ['Create Your Plate','About Us','Accessories','FAQs','Design Service','Contact Us']

const STEPS = [
  { num: 1, title: 'Choose your vehicle', subtitle: 'Car or Motorcycle?' },
  { num: 2, title: 'Design your plate', subtitle: 'Customise every detail' },
  { num: 3, title: 'Order & receive', subtitle: 'Ships next working day' },
]

export function V4() {
  const [activeStep, setActiveStep] = useState(1)
  const [reg] = useState('')

  return (
    <div style={{ background: '#FAFAF8', fontFamily: 'Inter, sans-serif', color: '#1A202C' }}>

      {/* FRIENDLY HEADER */}
      <header style={{ background: '#fff', borderBottom: '3px solid #FF6B35', padding: '0 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <Logo accentColor="#FF6B35" textColor="#1A202C" />
          <nav style={{ display: 'flex', gap: 24 }}>
            {NAV.slice(0, 5).map(l => (
              <a key={l} href="#" style={{ color: '#718096', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B35')}
                onMouseLeave={e => (e.currentTarget.style.color = '#718096')}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ background: '#FF6B35', color: '#fff', padding: '10px 20px', borderRadius: 24, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Basket [0]</a>
        </div>
      </header>

      {/* OFFER BANNER */}
      <div style={{ background: '#FF6B35', color: '#fff', textAlign: 'center', padding: '12px', fontSize: 14, fontWeight: 700 }}>
        20% OFF ALL STANDARD PLATES — Was <s>£34.99</s> → Now Only £27.99
      </div>

      {/* HERO: Friendly intro */}
      <section style={{ textAlign: 'center', padding: '80px 24px 48px', maxWidth: 700, margin: '0 auto' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }}>
          <div style={{ display: 'inline-block', background: '#FFF0EB', color: '#FF6B35', borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
            Trusted Since 2001
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 56, fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', color: '#1A202C' }}>
            Your Plate.<br/>Your Way.<br/><span style={{ color: '#FF6B35' }}>No Surprises.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#718096', lineHeight: 1.7, margin: '0 0 8px' }}>
            We've been making quality British plates since 2001. Price shown is price paid.
          </p>
        </motion.div>
      </section>

      {/* STEP PROGRESS */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 48 }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center' }}>
              <motion.button
                onClick={() => setActiveStep(s.num)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: '0 16px',
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18,
                  background: activeStep === s.num ? '#FF6B35' : activeStep > s.num ? '#FFF0EB' : '#E2E8F0',
                  color: activeStep === s.num ? '#fff' : activeStep > s.num ? '#FF6B35' : '#718096',
                  transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  border: activeStep > s.num ? '2px solid #FF6B35' : 'none',
                }}>
                  {activeStep > s.num ? '✓' : s.num}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: activeStep === s.num ? '#1A202C' : '#718096' }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: '#A0AEC0' }}>{s.subtitle}</div>
                </div>
              </motion.button>
              {i < STEPS.length - 1 && (
                <div style={{ width: 80, height: 2, background: activeStep > s.num ? '#FF6B35' : '#E2E8F0', transition: 'background 300ms ease', margin: '0 0 28px' }} />
              )}
            </div>
          ))}
        </div>

        {/* STEP CONTENT */}
        <AnimatePresence mode="wait">
          {activeStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }}>
              <div style={{ background: '#fff', borderRadius: 20, border: '2px solid #FDE8DF', padding: 40, textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 8 }}>What are you building a plate for?</h2>
                <p style={{ color: '#718096', marginBottom: 32 }}>Don't worry — you can change this later.</p>
                <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                  {['Car', 'Motorcycle'].map(v => (
                    <motion.button key={v} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      onClick={() => setActiveStep(2)}
                      style={{ background: '#FAFAF8', border: '2px solid #FDE8DF', borderRadius: 16, padding: '32px 48px', cursor: 'pointer', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 20, color: '#1A202C', transition: 'all 200ms' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35'; (e.currentTarget as HTMLElement).style.background = '#FFF0EB' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FDE8DF'; (e.currentTarget as HTMLElement).style.background = '#FAFAF8' }}>
                      <div style={{ fontSize: 40, marginBottom: 8 }}>{v === 'Car' ? '🚗' : '🏍️'}</div>
                      {v}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }}>
              <div style={{ background: '#fff', borderRadius: 20, border: '2px solid #FDE8DF', padding: 40 }}>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Design your perfect plate</h2>
                <p style={{ color: '#718096', marginBottom: 32 }}>Fill in the details below — see it update live.</p>
                <PlateConfigurator theme={theme} />
                <button onClick={() => setActiveStep(3)} style={{ marginTop: 24, background: '#FF6B35', color: '#fff', border: 'none', borderRadius: 12, padding: '14px 40px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, cursor: 'pointer' }}>
                  Looks Good — Next Step →
                </button>
              </div>
            </motion.div>
          )}

          {activeStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }}>
              <div style={{ background: '#fff', borderRadius: 20, border: '2px solid #FDE8DF', padding: 40, textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Your plates are ready to order</h2>
                <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 32 }}>
                  <PlatePreview registration={reg || 'AB12 CDE'} side="front" />
                  <PlatePreview registration={reg || 'AB12 CDE'} side="rear" />
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#FF6B35', fontFamily: 'Nunito, sans-serif', marginBottom: 8 }}>£27.99</div>
                <div style={{ fontSize: 14, color: '#718096', marginBottom: 24 }}>Free delivery · Next working day</div>
                {['No Documents Required','British Standard Materials','Ships Next Day'].map(t => (
                  <div key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF0EB', color: '#FF6B35', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 600, margin: '4px 4px' }}>
                    ✓ {t}
                  </div>
                ))}
                <br/>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ marginTop: 28, background: '#FF6B35', color: '#fff', border: 'none', borderRadius: 14, padding: '16px 48px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 20, cursor: 'pointer' }}>
                  Add To Basket
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2D3748', color: '#718096', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo accentColor="#FF6B35" textColor="#fff" size="sm" />
        <span style={{ fontSize: 12 }}>© My Show Plates 2001–2026</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Terms','Privacy','Cookies','Contact'].map(l => <a key={l} href="#" style={{ color: '#444', fontSize: 13, textDecoration: 'none' }}>{l}</a>)}
        </div>
      </footer>
    </div>
  )
}
