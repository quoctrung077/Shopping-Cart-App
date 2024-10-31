import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCarousel from "../components/Product-suggestions";
import ProductDetail from "../components/Product-detail";
function product() {
  return (
    <>
      <Header />
      <ProductDetail />
      <ProductCarousel />
      <Footer />
    </>
  );
}
export default product;
