import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
