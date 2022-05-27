import React from 'react'
import MyContext from '../context/Context';
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartProducts } = React.useContext(MyContext);
  const navigate = useNavigate();
  const sumProducts = cartProducts.reduce((prev, curr) => prev + Number(curr.price), 0);
  return (
    <main>
      <h1>Bem vindo ao carrinho de compras</h1>
      <button onClick={() => navigate("/")}>voltar as compras!</button>
      <section>
        {cartProducts === null ? <h1>carregando...</h1> :
          cartProducts.map(({ image, title, price, id }) =>
            <div key={id}>
              <h1>{title}</h1>
              <img src={image} alt={title} />
              <h2>{price}</h2>
            </div>
          )}
      </section>
      <section>
        <div>
          <h2>Valor Total:</h2>
          {cartProducts === null ? <h1>carregando...</h1> : sumProducts}
        </div>
        <div>
          {sumProducts >= 100 && <h1>Frete grátis liberado!</h1>}
        </div>
      </section>
    </main>
  )
}
