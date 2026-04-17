import { useState } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { PlateConfigurator } from '../components/PlateConfigurator'
import type { VariantTheme } from '../types'

const theme: VariantTheme = {
  id: 6, name: 'System Dark',
  primary: '#3B82F6', accent: '#3B82F6', surface: '#18181B',
  border: '#27272A', text: '#FAFAFA', muted: '#A1A1AA', bg: '#09090B',
  fontHeading: 'Inter', fontBody: 'Inter',
}

const NAV_ITEMS = [
  { icon: '⊞', label: 'Dashboard' },
  { icon: '⊡', label: 'Create Plate', active: true },
  { icon: '⊟', label: 'My Orders' },
  { icon: '◎', label: 'Accessories' },
  { icon: '◈', label: 'Design Service' },
  { icon: '◇', label: 'FAQs' },
]

const TABS = ['Plate Options','Typography','Badges','Slogan','Summary']

export function V6() {
  const [activeTab, setActiveTab] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div style={{ background: '#09090B', fontFamily: 'Inter, sans-serif', color: '#FAFAFA', display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* LEFT SIDEBAR */}
      <motion.aside animate={{ width: sidebarOpen ? 220 : 60 }} transition={{ duration: 0.25, ease: [0.4,0,0.2,1] }}
        style={{ background: '#111113', borderRight: '1px solid #27272A', display: 'flex', flexDirection: 'column', flexShrink: 0, overflow: 'hidden' }}>
        {/* Logo */}
        <div style={{ padding: '20px 16px', borderBottom: '1px solid #27272A', display: 'flex', alignItems: 'center', gap: 10, minHeight: 64 }}>
          {sidebarOpen ? <Logo accentColor="#3B82F6" textColor="#FAFAFA" size="sm" /> : <div style={{ fontSize: 20 }}>⊞</div>}
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '12px 8px' }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', borderRadius: 6, marginBottom: 2, cursor: 'pointer',
              background: item.active ? 'rgba(59,130,246,0.15)' : 'transparent',
              color: item.active ? '#3B82F6' : '#A1A1AA',
              transition: 'all 150ms ease',
            }}
            onMouseEnter={e => { if (!item.active) (e.currentTarget as HTMLElement).style.background = '#1C1C1F' }}
            onMouseLeave={e => { if (!item.active) (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
              <span style={{ fontSize: 16, flexShrink: 0, width: 20, textAlign: 'center' }}>{item.icon}</span>
              {sidebarOpen && <span style={{ fontSize: 13, fontWeight: item.active ? 600 : 400, whiteSpace: 'nowrap' }}>{item.label}</span>}
            </div>
          ))}
        </nav>

        {/* Collapse toggle */}
        <button onClick={() => setSidebarOpen(o => !o)} style={{ padding: '16px', background: 'none', border: 'none', color: '#A1A1AA', cursor: 'pointer', borderTop: '1px solid #27272A', textAlign: 'left', fontSize: 13 }}>
          {sidebarOpen ? '← Collapse' : '→'}
        </button>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* TOP BAR */}
        <header style={{ background: '#111113', borderBottom: '1px solid #27272A', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: 12, color: '#A1A1AA' }}>Dashboard / </span>
            <span style={{ fontSize: 12, color: '#FAFAFA', fontWeight: 600 }}>Create Plate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ background: '#3B82F6', color: '#fff', fontSize: 12, padding: '4px 10px', borderRadius: 4, fontWeight: 600 }}>20% OFF — £27.99</span>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>R</div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div style={{ flex: 1, padding: '24px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, alignItems: 'start' }}>

          {/* MAIN CARD */}
          <div>
            {/* Page title */}
            <div style={{ marginBottom: 20 }}>
              <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Create Your Plate</h1>
              <p style={{ fontSize: 13, color: '#A1A1AA', margin: 0 }}>Customise and order a British Standard show plate</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #27272A', marginBottom: 24, gap: 0 }}>
              {TABS.map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(i)} style={{
                  padding: '10px 20px', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: activeTab === i ? 600 : 400,
                  color: activeTab === i ? '#3B82F6' : '#A1A1AA',
                  borderBottom: activeTab === i ? '2px solid #3B82F6' : '2px solid transparent',
                  marginBottom: -1, transition: 'all 150ms ease',
                }}>{tab}</button>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: '#18181B', border: '1px solid #27272A', borderRadius: 8, padding: 24 }}>
              <PlateConfigurator theme={theme} />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Stats cards */}
            {[
              { label: 'Price', value: '£27.99', sub: 'Was £34.99', accent: true },
              { label: 'Dispatch', value: 'Next Day', sub: 'Order before 2pm' },
              { label: 'Standard', value: 'BSAU 145e', sub: 'British Standard' },
            ].map(s => (
              <div key={s.label} style={{ background: s.accent ? 'rgba(59,130,246,0.1)' : '#18181B', border: `1px solid ${s.accent ? '#3B82F6' : '#27272A'}`, borderRadius: 8, padding: '16px 20px' }}>
                <div style={{ fontSize: 11, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: s.accent ? '#3B82F6' : '#FAFAFA' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: '#A1A1AA', marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}

            {/* Trust checklist */}
            <div style={{ background: '#18181B', border: '1px solid #27272A', borderRadius: 8, padding: '16px 20px' }}>
              <div style={{ fontSize: 11, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Included</div>
              {['No hidden extras','No documents required','British Standard materials','Free standard delivery'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: '#3B82F6', fontSize: 14 }}>✓</span>
                  <span style={{ fontSize: 13, color: '#A1A1AA' }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div style={{ background: '#18181B', border: '1px solid #27272A', borderRadius: 8, padding: '16px 20px' }}>
              <div style={{ color: '#3B82F6', fontSize: 13, marginBottom: 8 }}>★★★★★</div>
              <p style={{ fontSize: 13, color: '#A1A1AA', lineHeight: 1.6, margin: '0 0 8px', fontStyle: 'italic' }}>"Plates arrived next day and look absolutely stunning."</p>
              <p style={{ fontSize: 12, color: '#52525B', margin: 0 }}>— Sarah T.</p>
            </div>
          </div>
        </div>

        {/* FOOTER BAR */}
        <footer style={{ borderTop: '1px solid #27272A', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 12, color: '#52525B' }}>© My Show Plates 2001–2026</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Terms','Privacy','Cookies'].map(l => <a key={l} href="#" style={{ color: '#52525B', fontSize: 12, textDecoration: 'none' }}>{l}</a>)}
          </div>
        </footer>
      </div>
    </div>
  )
}
