import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


import Navigate from "./components/Navigate";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Hats from "./components/Hats";
import Shoes from "./components/Shoes";



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
       <Switch>
              <Route exact path="/home">
              <Home />
            </Route>
           <Route exact path="/shoes">
              <Shoes />
            </Route>
           <Route exact path="/hats">
              <Hats />
            </Route>

           <Route exact path="/accessories">
              <Accessories />
            </Route>
</Switch>
</body>

<footer>
<Footer />
</footer>
</>
  )

}

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
