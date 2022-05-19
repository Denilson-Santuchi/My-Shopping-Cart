import api from './services/api';

function App() {
  const products = api();
  console.log(products);
  return (
    <section>
      {products.map(({ image, title, price }) =>
        <div>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <h2>{price}</h2>
        </div>
      )}
    </section>
  );
}

export default App;
