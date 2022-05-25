import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListProducts from '../pages/ListProducts';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListProducts />} />
      </Routes>
    </BrowserRouter>
  )
}
