import "./scss/app.scss"
import Header from "./components/Header"
import WelcomeContainer from "./components/WelcomeContainer"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Header />
      <WelcomeContainer />
      <ItemListContainer title="Products" />
      <Footer />
    </main>
  )
}

export default App
