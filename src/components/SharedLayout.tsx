import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { PlateConfigurator } from './PlateConfigurator'
import type { VariantTheme } from '../types'

const NAV_LINKS = ['Create Your Plate','About Us','Accessories','FAQs','Design Service','Contact Us']

const TRUST_ITEMS = ['All Sizes Held In Stock','Trusted Plate Supplier Since 2001','No Documents Required','British Standard Materials Used','High Quality Products','Next Day Dispatch']

const TESTIMONIALS = [
  { quote: 'Ordered a Flexi Plate for my Trials Bike. Amazing — never have to replace it again as it is so flexible it just bends back.', name: 'Mark Level', stars: 5 },
  { quote: 'Brilliant service, plates arrived next day and look absolutely stunning on the car. Will definitely order again.', name: 'Sarah T.', stars: 5 },
  { quote: 'Best show plates I have ever bought. Perfect finish, fast delivery and no hidden costs. Exactly as described.', name: 'James R.', stars: 5 },
]

const FEATURES = [
  { icon: '🛡', title: 'No Hidden Extras', body: 'Price shown is price paid. Always. Unlike our competitors.' },
  { icon: '📅', title: 'Trusted Since 2001', body: '23 years of British precision plate manufacturing.' },
  { icon: '🚚', title: 'Next Day Dispatch', body: 'Order before 2pm for next working day delivery.' },
]

interface Props {
  theme: VariantTheme
  heroImage?: string
  heroHeadline?: string
  heroSubline?: string
  heroStyle?: React.CSSProperties
  headlineStyle?: React.CSSProperties
  heroLayout?: 'full' | 'split' | 'text-only'
  alertStyle?: React.CSSProperties
  navRowStyle?: React.CSSProperties
  formSectionStyle?: React.CSSProperties
}

export function SharedLayout({
  theme,
  heroImage = 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80&auto=format',
  heroHeadline = 'What You See Is What You Pay.',
  heroSubline = 'British Standard plates. No documents required. No hidden extras. Ships next day.',
  heroStyle = {},
  headlineStyle = {},
  heroLayout = 'full',
  alertStyle = {},
  navRowStyle = {},
  formSectionStyle = {},
}: Props) {
  const isLight = ['#FFFFFF','#FAFAF8','#F8F9FA','#F0FDFA','#F7F9FC'].includes(theme.bg)

  return (
    <div style={{ background: theme.bg, minHeight: '100vh', fontFamily: theme.fontBody + ', Inter, sans-serif', color: theme.text }}>

      {/* HEADER */}
      <header style={{ background: theme.primary, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Logo accentColor={theme.accent} textColor={theme.text} />
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: theme.muted, fontSize: 14, textDecoration: 'none', transition: 'color 200ms ease' }}
               onMouseEnter={e => (e.currentTarget.style.color = theme.accent)}
               onMouseLeave={e => (e.currentTarget.style.color = theme.muted)}>Basket [0]</a>
            <a href="#" style={{ color: theme.muted, fontSize: 14, textDecoration: 'none', transition: 'color 200ms ease' }}
               onMouseEnter={e => (e.currentTarget.style.color = theme.accent)}
               onMouseLeave={e => (e.currentTarget.style.color = theme.muted)}>Contact Us</a>
          </div>
        </div>
        {/* Nav row */}
        <div style={{ background: navRowStyle.background || theme.surface, borderTop: `1px solid ${theme.border}`, ...navRowStyle }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 4 }}>
            {NAV_LINKS.map(link => (
              <a key={link} href="#" style={{
                color: (navRowStyle.background as string) === '#F2F200' ? '#2D3748' : theme.muted,
                padding: '10px 12px', fontSize: 13, fontWeight: 500, textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = (navRowStyle.background as string) === '#F2F200' ? '#2D3748' : theme.muted)}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      {heroLayout === 'text-only' ? (
        <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', ...heroStyle }}>
          <div style={{ textAlign: 'center', maxWidth: 700 }}>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
              style={{ fontSize: 96, fontWeight: 500, lineHeight: 1.0, margin: '0 0 24px', fontFamily: theme.fontHeading + ', sans-serif', ...headlineStyle }}>
              {heroHeadline}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.1 }}
              style={{ fontSize: 20, color: theme.muted, margin: '0 0 36px' }}>{heroSubline}</motion.p>
            <motion.a href="#configurator" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block', background: theme.accent, color: '#000', padding: '14px 36px', borderRadius: 4, fontWeight: 700, textDecoration: 'none', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Create Your Plate
            </motion.a>
          </div>
        </section>
      ) : heroLayout === 'split' ? (
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh', ...heroStyle }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px' }}>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.4,0,0.2,1] }}
              style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, margin: '0 0 20px', fontFamily: theme.fontHeading + ', sans-serif', ...headlineStyle }}>
              {heroHeadline}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15, ease: [0.4,0,0.2,1] }}
              style={{ fontSize: 18, color: theme.muted, margin: '0 0 32px', lineHeight: 1.6 }}>{heroSubline}</motion.p>
            <motion.a href="#configurator" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block', background: theme.accent, color: isLight ? theme.primary : '#000', padding: '14px 32px', borderRadius: 4, fontWeight: 700, textDecoration: 'none', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Create Your Plate
            </motion.a>
          </div>
          <div style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </section>
      ) : (
        <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', ...heroStyle }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,15,30,0.95) 45%, rgba(10,15,30,0.2) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', padding: '80px 24px' }}>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
              style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, margin: '0 0 20px', color: '#F0F4FF', fontFamily: theme.fontHeading + ', sans-serif', ...headlineStyle }}>
              {heroHeadline}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: [0.4,0,0.2,1] }}
              style={{ fontSize: 18, color: 'rgba(240,244,255,0.7)', margin: '0 0 36px', lineHeight: 1.7 }}>{heroSubline}</motion.p>
            <motion.a href="#configurator" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block', background: theme.accent, color: '#000', padding: '16px 36px', borderRadius: 4, fontWeight: 700, textDecoration: 'none', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Create Your Plate
            </motion.a>
          </div>
        </section>
      )}

      {/* TRUST TICKER */}
      <div style={{ background: theme.surface, borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}`, height: 40, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', gap: 48, fontSize: 13, color: theme.muted }}>
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span key={i}>{item} <span style={{ color: theme.accent, margin: '0 8px' }}>·</span></span>
          ))}
        </div>
      </div>

      {/* ALERT BAR */}
      <div style={{ background: theme.accent, padding: '14px 24px', textAlign: 'center', ...alertStyle }}>
        <span style={{ fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#000' }}>
          UNBELIEVABLE OFFER — 20% OFF ALL STANDARD PLATES · WAS <s>£34.99</s> · NOW ONLY £27.99
        </span>
      </div>

      {/* CONFIGURATOR */}
      <section id="configurator" style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px', ...formSectionStyle }}>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.4,0,0.2,1] }}
          style={{ fontFamily: theme.fontHeading + ', sans-serif', fontSize: 28, fontWeight: 700, color: theme.text, marginBottom: 32, textAlign: 'center' }}>
          Select Vehicle Type
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}>
          <PlateConfigurator theme={theme} />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section style={{ background: theme.surface, padding: '64px 24px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4,0,0.2,1] }}
              style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontFamily: theme.fontHeading + ', sans-serif', fontSize: 18, fontWeight: 700, color: theme.text, margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: theme.muted, lineHeight: 1.6, margin: 0 }}>{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '64px 24px', background: theme.bg }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fontHeading + ', sans-serif', fontSize: 24, fontWeight: 700, textAlign: 'center', marginBottom: 40, color: theme.text }}>What Our Customers Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4,0,0.2,1] }}
                style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 8, padding: 24 }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span key={s} style={{ color: theme.accent, fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: theme.text, lineHeight: 1.7, margin: '0 0 16px', fontStyle: 'italic' }}>"{t.quote}"</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: theme.muted, margin: 0 }}>— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: theme.primary, color: theme.muted, padding: '48px 24px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, paddingBottom: 48 }}>
          <div>
            <Logo accentColor={theme.accent} textColor={theme.text} size="sm" />
            <p style={{ fontSize: 13, lineHeight: 1.7, marginTop: 16, color: theme.muted }}>
              My Show Plates is the nation's leader in manufacture and supply of all types of plates. For Car/Bike.
            </p>
          </div>
          <div>
            <h4 style={{ color: theme.text, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Our Services</h4>
            {['Create Your Plate','Accessories','Basket'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: theme.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, transition: 'color 200ms ease' }}
                 onMouseEnter={e => (e.currentTarget.style.color = theme.accent)}
                 onMouseLeave={e => (e.currentTarget.style.color = theme.muted)}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: theme.text, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Quick Links</h4>
            {['Fitting','FAQs','Contact Us'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: theme.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, transition: 'color 200ms ease' }}
                 onMouseEnter={e => (e.currentTarget.style.color = theme.accent)}
                 onMouseLeave={e => (e.currentTarget.style.color = theme.muted)}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: theme.text, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Partners With</h4>
            {['ITV','BBC','Channel 4'].map(p => (
              <span key={p} style={{ display: 'inline-block', background: theme.surface, color: theme.muted, fontSize: 12, padding: '4px 10px', borderRadius: 4, marginRight: 8, marginBottom: 8 }}>{p}</span>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${theme.border}`, padding: '16px 0', textAlign: 'center', fontSize: 12, color: theme.muted }}>
          © My Show Plates 2001–2026 | Terms & Conditions | Privacy Policy | Cookie Policy
        </div>
      </footer>
    </div>
  )
}
