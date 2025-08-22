import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Main from './components/MainPages/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/FunctionalPages/Products'
import Details from './components/FunctionalPages/Details'
import ScrollToTop from './components/ScrollToTop'
import Cart from './components/FunctionalPages/Cart'
import { BasketContext, FilterContext, JordanContext } from './provider/context'
import Men from './components/MainPages/Men'
import Women from './components/MainPages/Women'
import Kids from './components/MainPages/Kids'
import Jordan from './components/MainPages/Jordan'
import Favorites from './components/FunctionalPages/Favorites'
import Error from './components/Error'

const App = () => {
  const [bagNotification, setBagNotification] = useState(false);
  
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [favoritesData, setFavorites] = useState([])
  
  const [jordanState, setJordan] = useState(false) 
  const [showFilter, setShowFilter] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setShowFilter(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [basket, setBasket] = useState(() => {
    const stored = sessionStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });
  {console.log("Filter",showFilter)}

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/jordan')) {
      setJordan(true);
    } else {
      setJordan(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className="flex flex-col min-h-screen">
      <JordanContext value = {{jordanState}}>
        <BasketContext value={{ basket, setBasket, bagNotification, setBagNotification }}>
          <FilterContext value={{ showFilter, setShowFilter, products, setProducts, filtered, setFiltered, favoritesData, setFavorites }}>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/:category/:subCategory?" element={<Products />} />
                <Route path="/details/:productId" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/jordan' element={<Jordan />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/*' element={<Error />} />
              </Routes>
            </main>
            
            <Footer />
            
          </FilterContext>
        </BasketContext>
      </JordanContext>
    </div>
  );
};

export default () => (
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
