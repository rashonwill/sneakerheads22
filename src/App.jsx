import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer, Pages } from "./components";
import { getAllProducts, getCart  } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(({products}) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);  

  useEffect(() => {
    async function fetchCart() {
      const userCart = await getCart();
      setCart(userCart);
    }
    fetchCart();
  }, []);


  return (
<>
    <header>
    <Header 
              
              cart={cart}
              setCart={setCart}
    />
  </header>

  <main>
<Pages 
cart={cart}
setCart={setCart}
products={products}
setProducts={setProducts}
/>
  </main>

  <footer>
<Footer />
</footer>
</>
  )

}

export default App;