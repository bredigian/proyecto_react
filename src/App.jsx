import "bootstrap/dist/css/bootstrap.min.css"
import "./scss/app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartProvider from "./context/CartContext"
import Checkout from "./components/Checkout"

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products"
            element={<ItemListContainer title="Products" />}
          />
          <Route
            exact
            path="/products/:category"
            element={<ItemListContainer title="Products" />}
          />
          <Route
            exact
            path="/products/:category/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
