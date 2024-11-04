import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product-detail";
import ShoppingCart from "./pages/Shopping-cart";
import NotFound from "./components/404";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product-detail/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
