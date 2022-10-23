import { useState } from "react"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import Loading from "./Loading"
const Home = () => {
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
        <div className="welcome-title d-flex flex-column align-items-center gap-2 p-4">
          <p className="welcome-title__title text-center">Welcome to</p>
          <img
            className="welcome-title__img"
            src="https://i.ibb.co/Zcfzb2s/brgIcon.png"
            alt=""
          />
        </div>
        <Link style={{ textDecoration: "none" }} to={"/products"}>
          <div className="welcome-order d-flex align-items-center gap-2">
            <p className="m-0 welcome-order__title">Order now!</p>
            <MdShoppingCart className="welcome-order__icon" />
          </div>
        </Link>
      </div>
    )
  } else {
    return <Loading />
  }
}
export default Home
