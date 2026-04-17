interface LogoProps {
  accentColor?: string
  textColor?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ accentColor = '#FFB800', textColor = '#FFFFFF', size = 'md' }: LogoProps) {
  const h = size === 'sm' ? 28 : size === 'lg' ? 48 : 36
  return (
    <svg height={h} viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      {/* Plate icon */}
      <rect x="1" y="8" width="36" height="24" rx="3" stroke={accentColor} strokeWidth="2" fill="none"/>
      <circle cx="5" cy="12" r="1.5" fill={accentColor}/>
      <circle cx="5" cy="28" r="1.5" fill={accentColor}/>
      <circle cx="33" cy="12" r="1.5" fill={accentColor}/>
      <circle cx="33" cy="28" r="1.5" fill={accentColor}/>
      <text x="19" y="24" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="10" fill={accentColor}>MY</text>
      {/* Wordmark */}
      <text x="46" y="27" fontFamily="'Space Grotesk', 'Inter', sans-serif" fontWeight="800" fontSize="18" fill={textColor}>
        My<tspan fill={accentColor}>Show</tspan>Plates
      </text>
    </svg>
  )
}
