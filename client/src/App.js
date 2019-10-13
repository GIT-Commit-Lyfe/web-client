import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './views/home/Landing'
import Portal from "./views/seller/Portal";
import MyPortofolio from "./views/user/MyPortofolio";
import Chartester from "./components/portofolios/Chartester" 
import ProductDetail from "./components/products/ProductDetail";
import ProductSearch from "./views/product/ProductSearch";
import Footer from "./components/Footer";
import ProductList from "./views/product/ProductList"
import PromotionBar from "./components/PromotionBar";
import Navbar from "./components/Navbar";

const exampleContent = "Get a $100 off on your first transaction with us"; //fetch from promo center

function App() {
  return (
    <>
    <PromotionBar content={exampleContent}></PromotionBar>
    <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/my-portofolio/" exact component={MyPortofolio}></Route>
          <Route path="/my-portofolio/:id" component={Chartester}></Route>
          <Route path="/seller-portal" component={Portal} />
          <Route path="/products/search" exact component={ProductSearch} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
