import "./scss/app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import WelcomeContainer from "./components/WelcomeContainer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<WelcomeContainer />} />
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
