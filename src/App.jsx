
import './App.css'
import Home from './page/Home/Home'
import MobileLayout from './page/Layout'
import Product from './page/Products/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './page/PageNotFound'
import Contact from './page/Contact/Contact'
import Aboutme from './page/About/Aboutme'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MobileLayout />}>
    <Route index element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/aboutme" element={<Aboutme />} />
    <Route path="*" element={<PageNotFound/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
