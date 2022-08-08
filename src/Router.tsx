import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Success } from './Pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>

      {/* <Route path="/checkout" element={<DefaultLayout />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<Success />} />
      </Route> */}
    </Routes>
  )
}
