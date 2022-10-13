import { useState } from "react"
import Loading from "./Loading"
import WelcomeItems from "./WelcomeItems"
import WelcomeTitle from "./WelcomeTitle"
const Home = (props) => {
  const [loading, setLoading] = useState(false)
  const load = () => {
    setTimeout(() => {
      setLoading(true)
    }, 1500)
  }
  load()
  if (loading) {
    return (
      <div className="welcome d-flex w-100 align-items-center justify-content-evenly p-4 mt-5 mb-5">
        <WelcomeItems />
        <WelcomeTitle name="brg's Shop" />
      </div>
    )
  } else {
    return <Loading />
  }
}
export default Home
