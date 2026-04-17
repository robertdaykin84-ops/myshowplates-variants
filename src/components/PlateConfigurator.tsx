import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Select from 'react-select'
import { PlatePreview } from './PlatePreview'
import { defaultForm } from '../types'
import type { PlateFormState, VariantTheme } from '../types'

interface Props { theme: VariantTheme }

const opt = (arr: string[]) => arr.map(v => ({ value: v, label: v }))

const PLATE_TYPES = opt(['Standard Plate','Show Plate','4D Plate','Gel Plate'])
const PLATES_WHICH = opt(['Front & Rear','Front Only','Rear Only'])
const PLATE_SIZES = opt(['Standard Car Oblong (20.5x4.4in)','Short (11x3in)','Motorcycle (9x7in)','Trailer Board (20.5x5.5in)'])
const FONTS = opt(['Charles Wright','3D Bold','Hex Plate','Germanic','Standard'])
const COLOURS = opt(['Black','White','Yellow','Red','Blue','Green'])
const BORDER_STYLES = opt(['None','Thin 1mm','Medium 2mm','Thick 3mm'])
const BORDER_COLOURS = opt(['Black','Silver','Gold','Red','Blue'])
const BADGE_CATS = opt(['None','GB','EU Flag','County','Club','Custom'])
const BADGE_POSITIONS_L = opt(['Far Left','Center-Left'])
const BADGE_POSITIONS_R = opt(['Far Right','Center-Right'])
const BADGE_COLOURS = opt(['Standard','Blue','Black','Red','Gold'])
const SLOGAN_FONTS = opt(['Charles Wright','Arial','Impact','Script Italic'])
const SLOGAN_COLOURS = opt(['Black','White','Red','Blue','Gold','Silver'])

export function PlateConfigurator({ theme }: Props) {
  const [form, setForm] = useState<PlateFormState>(defaultForm)
  const [success, setSuccess] = useState(false)

  const upd = (key: keyof PlateFormState, val: unknown) => setForm(f => ({ ...f, [key]: val }))

  const selectStyles = {
    control: (b: object) => ({ ...b, background: theme.surface, borderColor: theme.border, color: theme.text, minHeight: 40 }),
    singleValue: (b: object) => ({ ...b, color: theme.text }),
    menu: (b: object) => ({ ...b, background: theme.surface, zIndex: 50 }),
    option: (b: object, s: { isFocused: boolean }) => ({ ...b, background: s.isFocused ? theme.accent + '33' : theme.surface, color: theme.text }),
    placeholder: (b: object) => ({ ...b, color: theme.muted }),
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '8px 12px', borderRadius: 4, border: `1px solid ${theme.border}`,
    background: theme.surface, color: theme.text, fontSize: 14, fontFamily: 'inherit',
    outline: 'none', transition: 'box-shadow 150ms ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 500, color: theme.muted,
    textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4, fontFamily: theme.fontBody + ', sans-serif',
  }

  const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' }

  const rowStyle: React.CSSProperties = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 16,
  }

  return (
    <div style={{ fontFamily: theme.fontBody + ', Inter, sans-serif' }}>
      {/* Vehicle Toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {(['car','motorcycle'] as const).map(t => (
          <button key={t} onClick={() => upd('vehicleType', t)} style={{
            padding: '10px 28px', borderRadius: 4, border: 'none', cursor: 'pointer', fontWeight: 700,
            fontSize: 14, textTransform: 'capitalize', transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
            background: form.vehicleType === t ? theme.accent : theme.surface,
            color: form.vehicleType === t ? '#000' : theme.muted,
          }}>
            {t === 'car' ? 'Car' : 'Motorcycle'}
          </button>
        ))}
      </div>

      {/* Plate Preview */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <PlatePreview registration={form.frontReg} side="front" colour={form.regColour} />
        <PlatePreview registration={form.rearReg}  side="rear"  colour={form.regColour} />
      </div>

      {/* Form area */}
      <div style={{ background: theme.surface, borderRadius: 8, padding: 24, border: `1px solid ${theme.border}` }}>

        {/* Registration */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Front Registration</label><input style={inputStyle} type="text" id="front_registration_line_1" maxLength={7} value={form.frontReg} placeholder="e.g. AB12 CDE" onChange={e => upd('frontReg', e.target.value)} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Front Qty</label><input style={inputStyle} type="number" id="number1" min={1} max={10} value={form.frontQty} onChange={e => upd('frontQty', +e.target.value)} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Rear Registration</label><input style={inputStyle} type="text" id="rear_registration_line_1" maxLength={7} value={form.rearReg} placeholder="e.g. AB12 CDE" onChange={e => upd('rearReg', e.target.value)} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Rear Qty</label><input style={inputStyle} type="number" id="number2" min={1} max={10} value={form.rearQty} onChange={e => upd('rearQty', +e.target.value)} /></div>
        </div>

        {/* Plate Options */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Plate Type</label><Select id="plate_type" options={PLATE_TYPES} value={{ value: form.plateType, label: form.plateType }} onChange={o => upd('plateType', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Plates</label><Select id="plates_which" options={PLATES_WHICH} value={{ value: form.platesWhich, label: form.platesWhich }} onChange={o => upd('platesWhich', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Front Plate Size</label><Select id="front_plate_size" options={PLATE_SIZES} value={{ value: form.frontSize, label: form.frontSize }} onChange={o => upd('frontSize', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Rear Plate Size</label><Select id="rear_plate_size" options={PLATE_SIZES} value={{ value: form.rearSize, label: form.rearSize }} onChange={o => upd('rearSize', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* Typography */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Registration Font</label><Select inputId="react-select-6" options={FONTS} value={{ value: form.regFont, label: form.regFont }} onChange={o => upd('regFont', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Registration Colour</label><Select inputId="react-select-7" options={COLOURS} value={{ value: form.regColour, label: form.regColour }} onChange={o => upd('regColour', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* Border */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Border Style</label><Select id="border_thickness" options={BORDER_STYLES} value={{ value: form.borderStyle, label: form.borderStyle }} onChange={o => upd('borderStyle', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Border Colour</label><Select inputId="react-select-9" options={BORDER_COLOURS} value={{ value: form.borderColour, label: form.borderColour }} onChange={o => upd('borderColour', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* Left Badge */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Left Badge Category</label><Select id="badge_category_left" options={BADGE_CATS} value={{ value: form.leftBadgeCat, label: form.leftBadgeCat }} onChange={o => upd('leftBadgeCat', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Select Left Badge</label><Select inputId="react-select-11" options={opt(form.leftBadgeCat === 'GB' ? ['GB Standard','GB Gold'] : ['None'])} value={{ value: form.leftBadge, label: form.leftBadge }} onChange={o => upd('leftBadge', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Left Badge Position</label><Select id="badge_position_left" options={BADGE_POSITIONS_L} value={{ value: form.leftBadgePos, label: form.leftBadgePos }} onChange={o => upd('leftBadgePos', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Left Badge Colour</label><Select inputId="react-select-16" options={BADGE_COLOURS} value={{ value: form.leftBadgeColour, label: form.leftBadgeColour }} onChange={o => upd('leftBadgeColour', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* Right Badge */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Right Badge Category</label><Select id="badge_category_right" options={BADGE_CATS} value={{ value: form.rightBadgeCat, label: form.rightBadgeCat }} onChange={o => upd('rightBadgeCat', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Select Right Badge</label><Select inputId="react-select-13" options={opt(form.rightBadgeCat === 'GB' ? ['GB Standard','GB Gold'] : ['None'])} value={{ value: form.rightBadge, label: form.rightBadge }} onChange={o => upd('rightBadge', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Right Badge Position</label><Select id="badge_position_right" options={BADGE_POSITIONS_R} value={{ value: form.rightBadgePos, label: form.rightBadgePos }} onChange={o => upd('rightBadgePos', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Right Badge Colour</label><Select inputId="react-select-17" options={BADGE_COLOURS} value={{ value: form.rightBadgeColour, label: form.rightBadgeColour }} onChange={o => upd('rightBadgeColour', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* British Standard */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>British Standard Details</label>
          <input style={inputStyle} type="text" id="bs_details" value={form.bsDetails} placeholder="e.g. BSAU 145e — leave blank for standard" onChange={e => upd('bsDetails', e.target.value)} />
        </div>

        {/* Slogan */}
        <div style={rowStyle}>
          <div style={fieldStyle}><label style={labelStyle}>Your Slogan</label><input style={inputStyle} type="text" value={form.slogan} maxLength={30} placeholder="Enter your personal slogan" onChange={e => upd('slogan', e.target.value)} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Slogan Font</label><Select inputId="react-select-19" options={SLOGAN_FONTS} value={{ value: form.sloganFont, label: form.sloganFont }} onChange={o => upd('sloganFont', o?.value)} styles={selectStyles} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Slogan Font Size</label><input style={inputStyle} type="number" id="slogan_font_size" min={8} max={24} value={form.sloganSize} onChange={e => upd('sloganSize', +e.target.value)} /></div>
          <div style={fieldStyle}><label style={labelStyle}>Slogan Colour</label><Select inputId="react-select-21" options={SLOGAN_COLOURS} value={{ value: form.sloganColour, label: form.sloganColour }} onChange={o => upd('sloganColour', o?.value)} styles={selectStyles} /></div>
        </div>

        {/* Custom Design */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', color: theme.muted, fontSize: 14 }}>
            <input type="checkbox" checked={form.customDesign} onChange={e => upd('customDesign', e.target.checked)} />
            Please click for custom design requirements
          </label>
          <AnimatePresence>
            {form.customDesign && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }} style={{ overflow: 'hidden' }}>
                <textarea style={{ ...inputStyle, marginTop: 8, resize: 'vertical', minHeight: 80 }} rows={4} value={form.customInstructions} placeholder="Describe your bespoke design requirements..." onChange={e => upd('customInstructions', e.target.value)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ color: theme.text, fontFamily: theme.fontHeading + ', sans-serif' }}>
            <span style={{ fontSize: 14, color: theme.muted }}>Price: </span>
            <span style={{ fontSize: 28, fontWeight: 700, color: theme.accent }}>£27.99</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.4,0,0.2,1] }}
            onClick={() => { setSuccess(true); setTimeout(() => setSuccess(false), 2500) }}
            style={{
              padding: '14px 40px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: theme.accent, color: theme.bg === '#FFFFFF' || theme.bg === '#FAFAF8' || theme.bg === '#F8F9FA' || theme.bg === '#F0FDFA' ? theme.primary : '#000',
              fontFamily: theme.fontHeading + ', sans-serif', fontWeight: 700, fontSize: 16,
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}
          >
            {success ? 'Added!' : 'Add To Basket'}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
