import Parent from "./components/Parent"
import Profile from "./components/Profile"
import State from "./hooks/State"
import Form from "./hooks/Form"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import  Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>

    </Routes>

 
    </>
  ) 
}
export default App