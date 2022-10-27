import "bootstrap/dist/css/bootstrap.min.css"
import "./scss/app.scss"
import "firebase/auth"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AuthProvider from "./context/AuthContext"
import CartProvider from "./context/CartContext"
import Checkout from "./components/Checkout"
import Header from "./components/Header"
import Home from "./components/Home"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import ProtectedRoute from "./components/ProtectedRoute"
import Sign from "./components/Sign"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Sign />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
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
              element={
                <ProtectedRoute>
                  <ItemDetailContainer />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
