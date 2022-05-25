import React from 'react'
import useApi from '../services/api';

export default function ListProducts() {
  const products = useApi();
  return (
    <section>
      {products === null ? <h1>carregando...</h1> :
        products.map(({ image, title, price, id }) =>
          <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <h2>{price}</h2>
          </div>
        )}
    </section>
  )
}
