import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer, Pages } from "./components";
import { getAllProducts } from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(({products}) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);  


  return (
<>
    <header>
    <Header />
  </header>

  <main>
<Pages />
  </main>

  <footer>
<Footer />
</footer>
</>
  )

}

export default App;