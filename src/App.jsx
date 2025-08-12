import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'



const App = () => {
  const [bagNotification, setBagNotification] = useState(false);

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
        <Header basket={basket} setBasket={setBasket} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/:collectionId/:gender?" element={<Products />} />

            <Route
              path="/details/:productId"
              element={
                <Details
                  basket={basket}
                  setBasket={setBasket}
                  bagNotification={bagNotification}
                  setBagNotification={setBagNotification}
                />
              }
            />
            <Route path="/cart" element={<Cart basket={basket} setBasket={setBasket}/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App