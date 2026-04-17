import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { VariantSwitcher } from './components/VariantSwitcher'
import { V1 } from './variants/V1'
import { V2 } from './variants/V2'
import { V3 } from './variants/V3'
import { V4 } from './variants/V4'
import { V5 } from './variants/V5'
import { V6 } from './variants/V6'
import { V7 } from './variants/V7'
import { V8 } from './variants/V8'
import { V9 } from './variants/V9'
import { V10 } from './variants/V10'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" replace />} />
        <Route path="/v1"  element={<V1  />} />
        <Route path="/v2"  element={<V2  />} />
        <Route path="/v3"  element={<V3  />} />
        <Route path="/v4"  element={<V4  />} />
        <Route path="/v5"  element={<V5  />} />
        <Route path="/v6"  element={<V6  />} />
        <Route path="/v7"  element={<V7  />} />
        <Route path="/v8"  element={<V8  />} />
        <Route path="/v9"  element={<V9  />} />
        <Route path="/v10" element={<V10 />} />
        <Route path="*"    element={<Navigate to="/v1" replace />} />
      </Routes>
      <VariantSwitcher />
    </BrowserRouter>
  )
}
