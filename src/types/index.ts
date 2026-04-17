export interface VariantTheme {
  id: number
  name: string
  primary: string
  accent: string
  surface: string
  border: string
  text: string
  muted: string
  bg: string
  fontHeading: string
  fontBody: string
}

export interface PlateFormState {
  vehicleType: 'car' | 'motorcycle'
  frontReg: string
  frontQty: number
  rearReg: string
  rearQty: number
  plateType: string
  platesWhich: string
  frontSize: string
  rearSize: string
  regFont: string
  regColour: string
  borderStyle: string
  borderColour: string
  leftBadgeCat: string
  leftBadge: string
  leftBadgePos: string
  leftBadgeColour: string
  rightBadgeCat: string
  rightBadge: string
  rightBadgePos: string
  rightBadgeColour: string
  bsDetails: string
  slogan: string
  sloganFont: string
  sloganSize: number
  sloganColour: string
  customDesign: boolean
  customInstructions: string
}

export const defaultForm: PlateFormState = {
  vehicleType: 'car',
  frontReg: '', frontQty: 1,
  rearReg: '', rearQty: 1,
  plateType: 'Standard Plate',
  platesWhich: 'Front & Rear',
  frontSize: 'Standard Car Oblong (20.5x4.4in)',
  rearSize: 'Standard Car Oblong (20.5x4.4in)',
  regFont: 'Charles Wright',
  regColour: 'Black',
  borderStyle: 'None',
  borderColour: 'Black',
  leftBadgeCat: 'None', leftBadge: 'None', leftBadgePos: 'Far Left', leftBadgeColour: 'Standard',
  rightBadgeCat: 'None', rightBadge: 'None', rightBadgePos: 'Far Right', rightBadgeColour: 'Standard',
  bsDetails: '',
  slogan: '', sloganFont: 'Charles Wright', sloganSize: 12, sloganColour: 'Black',
  customDesign: false, customInstructions: '',
}

export const VARIANTS: VariantTheme[] = [
  { id:1,  name:'Premium Navy',       primary:'#0A0F1E', accent:'#FFB800', surface:'#141929', border:'#1E2D4F', text:'#F0F4FF', muted:'#8892B0', bg:'#0A0F1E', fontHeading:'Space Grotesk', fontBody:'Inter' },
  { id:2,  name:'Chrome Matte',       primary:'#111111', accent:'#E63946', surface:'#1A1A1A', border:'#2A2A2A', text:'#FFFFFF', muted:'#666666', bg:'#111111', fontHeading:'Inter',         fontBody:'Inter' },
  { id:3,  name:'Clean Speed',        primary:'#0066FF', accent:'#00D4FF', surface:'#F7F9FC', border:'#E0E8FF', text:'#0A0A0A', muted:'#6B7280', bg:'#FFFFFF', fontHeading:'Plus Jakarta Sans', fontBody:'Plus Jakarta Sans' },
  { id:4,  name:'Warm Trust',         primary:'#FF6B35', accent:'#FF6B35', surface:'#FFFFFF', border:'#FDE8DF', text:'#1A202C', muted:'#718096', bg:'#FAFAF8', fontHeading:'Nunito',        fontBody:'Inter' },
  { id:5,  name:'Zero Noise',         primary:'#171717', accent:'#171717', surface:'#FAFAFA', border:'#E5E5E5', text:'#171717', muted:'#737373', bg:'#FFFFFF', fontHeading:'Inter',         fontBody:'Inter' },
  { id:6,  name:'System Dark',        primary:'#3B82F6', accent:'#3B82F6', surface:'#18181B', border:'#27272A', text:'#FAFAFA', muted:'#A1A1AA', bg:'#09090B', fontHeading:'Inter',         fontBody:'Inter' },
  { id:7,  name:'Neon Rush',          primary:'#00F0FF', accent:'#7C3AED', surface:'rgba(255,255,255,0.05)', border:'rgba(0,240,255,0.2)', text:'#FFFFFF', muted:'rgba(255,255,255,0.5)', bg:'#0D0221', fontHeading:'Urbanist', fontBody:'Inter' },
  { id:8,  name:'Blueprint',          primary:'#1E3A5F', accent:'#F59E0B', surface:'#EDF2F7', border:'#CBD5E0', text:'#1A202C', muted:'#4A5568', bg:'#F8F9FA', fontHeading:'IBM Plex Sans', fontBody:'IBM Plex Sans' },
  { id:9,  name:'Structured Teal',    primary:'#0D9488', accent:'#0D9488', surface:'#F0FDFA', border:'#CCFBF1', text:'#111827', muted:'#6B7280', bg:'#FFFFFF', fontHeading:'DM Sans',       fontBody:'DM Sans' },
  { id:10, name:'Cinematic Dark',     primary:'#050505', accent:'#BF953F', surface:'#0F0F0F', border:'rgba(191,149,63,0.3)', text:'#F5F0E8', muted:'#666058', bg:'#050505', fontHeading:'Cormorant Garamond', fontBody:'Inter' },
]
