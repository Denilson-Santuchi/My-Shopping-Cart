import React from 'react'
import MyContext from './Context'

export default function ProviderCart({ children }) {
  const [cartProducts, setCartProducts] = React.useState([]);

  return (
    <MyContext.Provider value={{
      cartProducts,
      setCartProducts
    }}>
      {children}
    </MyContext.Provider>
  )
}
