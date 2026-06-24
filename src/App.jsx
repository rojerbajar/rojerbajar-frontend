
import './App.css'
import Home from './page/Home/home'
import MobileLayout from './page/Layout'
import Product from './page/Products/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './page/PageNotFound'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MobileLayout />}>
    <Route index element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="*" element={<PageNotFound />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
