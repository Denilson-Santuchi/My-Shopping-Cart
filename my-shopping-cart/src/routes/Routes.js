import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListProducts from '../pages/ListProducts';
import Cart from '../pages/Cart';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListProducts />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
