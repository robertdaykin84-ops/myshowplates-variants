import { useNavigate, useLocation } from 'react-router-dom'
import { VARIANTS } from '../types'

export function VariantSwitcher() {
  const navigate = useNavigate()
  const location = useLocation()
  const current = parseInt(location.pathname.replace('/v', '')) || 1

  return (
    <div style={{
      position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', gap: 6, background: 'rgba(0,0,0,0.85)', padding: '8px 12px',
      borderRadius: 40, backdropFilter: 'blur(12px)', zIndex: 9999,
      boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
    }}>
      {VARIANTS.map(v => (
        <button
          key={v.id}
          onClick={() => navigate(`/v${v.id}`)}
          title={`V${v.id} — ${v.name}`}
          style={{
            width: 32, height: 32, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: current === v.id ? v.accent : 'rgba(255,255,255,0.15)',
            color: current === v.id ? '#000' : '#fff',
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12,
            transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
            transform: current === v.id ? 'scale(1.15)' : 'scale(1)',
          }}
        >
          {v.id}
        </button>
      ))}
    </div>
  )
}
