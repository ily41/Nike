import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ScrollToTop />
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products/:collectionId' element={<Products />} />
          <Route path='/details/:productId' element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

