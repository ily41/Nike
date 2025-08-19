import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'
import Cart from './components/Cart'
import { BasketContext, FilterContext, JordanContext } from './provider/context'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Jordan from './components/Jordan'
import Favorites from './components/Favorites'

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
