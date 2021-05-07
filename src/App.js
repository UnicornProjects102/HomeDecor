import React, { useState, useEffect } from 'react';
import { getProducts } from './ProductService';
import { Switch, Route } from "react-router-dom";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggle";
import ProductContainer from './components/ProductContainer';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Search from './components/Search';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './components/Home';


function App() {
  const [products, setProducts] = useState(JSON.parse(window.localStorage.getItem("products")) ||
    getProducts()
  );
  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem("cartItems")) || []);

  const [searchValue, setSearchValue, resetSearchValue] = useInputState("");

  const [open, setOpen] = useToggle(false);

  const categories = ["pillows", "mugs", "decoration", "plush toys", "figurines"];

  const collections = ["pink", "winter", "birthday"];

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems))
    window.localStorage.setItem("products", JSON.stringify(products))
  }, [cartItems, products]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    products.map(p => {
      if (p.id === product.id) {
        p.inCart = true;
        p.cartCount = 1;
      } return p;
    })
    setProducts(products);
  }

  return (
    <div className="App">
      <Grid alignItems="center" container spacing={0}>
        <Grid item xs={12}>
          <Nav cartItems={cartItems} setCartItems={setCartItems} products={products} setProducts={setProducts} open={open} setOpen={setOpen} />
        </Grid>
        <Grid item xs={12}>
          <Grid className="grid" container spacing={0}>

            <Grid item xs={2} md={9} style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
              <Menu categories={categories} />
            </Grid>
            <Grid item xs={10} md={3}>
              <Search searchValue={searchValue} setSearchValue={setSearchValue} resetSearechValue={resetSearchValue} />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            {categories.map(c =>
              <Route key={c} path={`/products/${c}`} render={(routeProps) => <ProductContainer products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} category={`${c}`} collection="" {...routeProps} />} />)}

            {collections.map(c => <Route key={c} path={`/products/${c}`} render={(routeProps) => <ProductContainer products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} category="" collection={`${c}`} {...routeProps} />} />)}

            <Route exact path="/search/:searchValue" render={(routeProps) => <ProductContainer products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} searchValue={searchValue} {...routeProps} />} />

            <Route exact path="/products/:id" render={(routeProps, props) => <ProductDetail {...props} products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} open={open} setOpen={setOpen} {...routeProps} />} />

            <Route exact path="/products" render={() => <ProductContainer products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} category="" collection="" />} />

            <Route exact path="/" render={(routeProps) => <Home products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} category="" {...routeProps} />} />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
