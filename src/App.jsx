import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'
import { useState } from 'react'
import Cart from './components/Cart'

const App = () => {
    const [bagNotification,setBagNotification] = useState(false)
    
  return (
    <BrowserRouter>
    <ScrollToTop />
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products/:collectionId' element={<Products />} />
          <Route path='/details/:productId' element={<Details  bagNotification={bagNotification} setBagNotification={setBagNotification}/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
  )
}

export default App