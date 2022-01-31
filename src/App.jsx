import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer, Pages } from "./components";
// import { getAllProducts, getCart  } from "./api";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    axios
      .get(`https://sneakerhead22.herokuapp.com/api/products`)
      .then(({ data }) => {
        if (data.length) {
          setProducts(data);
          console.log(data);
        }
      });
  }, []);  

//   useEffect(async () => {
//     axios
//       .get(`https://sneakerhead22.herokuapp.com/api/cart`)
//       .then(({ data }) => {
//         if (data.length) {
//           setCart(data);
//           console.log(data);
//         }
//       });
//   }, []); 


  return (
<>
    <header>
    <Header 
              
              cart={cart}
              setCart={setCart}
    />
  </header>

  <body>
<Pages 
cart={cart}
setCart={setCart}
products={products}
setProducts={setProducts}
/>
  </body>

  <footer>
<Footer />
</footer>
</>
  )

}

export default App;
