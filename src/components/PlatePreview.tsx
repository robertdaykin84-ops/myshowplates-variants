interface PlatePreviewProps {
  registration: string
  side: 'front' | 'rear'
  font?: string
  colour?: string
}

export function PlatePreview({ registration, side, colour = 'Black' }: PlatePreviewProps) {
  const isFront = side === 'front'
  const plateBg = isFront ? '#F2F200' : '#FFFFFF'
  const textColor = colour === 'White' ? '#FFFFFF' : colour === 'Yellow' ? '#F2F200' : colour === 'Red' ? '#CC0000' : colour === 'Blue' ? '#003399' : '#000000'
  const displayText = registration.trim().toUpperCase() || 'YOUR REG'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ fontSize: 11, color: 'currentColor', opacity: 0.6, fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {isFront ? 'Front View' : 'Rear View'}
      </div>
      <svg viewBox="0 0 320 70" width="100%" style={{ maxWidth: 280, borderRadius: 4, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="320" height="70" rx="6" fill={plateBg} stroke="#999" strokeWidth="1.5"/>
        {/* fixing holes */}
        <circle cx="14" cy="35" r="4" fill="#ccc" stroke="#999" strokeWidth="1"/>
        <circle cx="306" cy="35" r="4" fill="#ccc" stroke="#999" strokeWidth="1"/>
        <text
          x="160" y="50"
          textAnchor="middle"
          fontFamily="'Courier New', monospace"
          fontWeight="900"
          fontSize="38"
          letterSpacing="4"
          fill={textColor}
        >
          {displayText}
        </text>
      </svg>
    </div>
  )
}
