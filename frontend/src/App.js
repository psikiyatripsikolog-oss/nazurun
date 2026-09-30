import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header";
import Footer, { InstagramStrip } from "./components/layout/Footer";
import CartDrawer from "./components/layout/CartDrawer";
import ScrollTop from "./components/layout/ScrollTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import About from "./pages/About";
import Ingredients from "./pages/Ingredients";
import Guide from "./pages/Guide";
import Shipping from "./pages/Shipping";
import FaqPage from "./pages/FaqPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTopOnRoute />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urunler" element={<Shop />} />
            <Route path="/urun/:slug" element={<ProductDetail />} />
            <Route path="/sepet" element={<Cart />} />
            <Route path="/odeme" element={<Checkout />} />
            <Route path="/siparis-alindi/:orderNo" element={<OrderSuccess />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/bilesenler" element={<Ingredients />} />
            <Route path="/kullanim-rehberi" element={<Guide />} />
            <Route path="/kargo-ve-iade" element={<Shipping />} />
            <Route path="/sss" element={<FaqPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kvkk" element={<Legal doc="kvkk" />} />
            <Route path="/gizlilik-politikasi" element={<Legal doc="gizlilik" />} />
            <Route path="/mesafeli-satis-sozlesmesi" element={<Legal doc="mesafeli" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <InstagramStrip />
          <Footer />
          <CartDrawer />
          <ScrollTop />
          <Toaster position="bottom-left" richColors closeButton />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
