import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import { BasketContext, FilterContext } from './provider/context'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'



const App = () => {
  const [bagNotification, setBagNotification] = useState(false);
  const [showFilter, setShowFilter] = useState(true)
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])



  const [basket, setBasket] = useState(() => {
    const stored = sessionStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <BasketContext value={{basket, setBasket, bagNotification, setBagNotification}}>
          <FilterContext value = {{showFilter,setShowFilter,products, setProducts,filtered, setFiltered}}>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/:category/:subCategory?" element={<Products />} />

                <Route
                  path="/details/:productId"
                  element={

                      <Details />

                  }
                />
                <Route path="/cart" element={<Cart/>} />
                <Route path='/men' element={<Men/>} />
                <Route path='/women' element={<Women/>} />
                <Route path='/kids' element={<Kids/>} />
              </Routes>
            </main>
            <Footer />
          </FilterContext>
        </BasketContext>
      </div>
        
    </BrowserRouter>
  );
};


export default App