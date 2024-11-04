import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product-detail";
import ShoppingCart from "./pages/Shopping-cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product-detail/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
