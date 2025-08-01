import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Details from './components/Details'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Header />

          <Routes>
            <Route path ='/' element ={<Main />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/details' element={<Details />}></Route>
          </Routes>
        

    </BrowserRouter>
    
    

)
