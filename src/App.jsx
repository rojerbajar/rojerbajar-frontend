
import './App.css'
import Home from './page/Home/Home'
import MobileLayout from './page/Layout'
import Product from './page/Products/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MobileLayout />}>
    <Route index element={<Home />} />
    <Route path="/products" element={<Product />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
