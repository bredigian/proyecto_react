import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const NavBarItems = {
  Home: () => {
    return (
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
    )
  },
  Products: () => {
    return (
      <li>
        <Link className="link" to="/products">
          Products
        </Link>
        <ul className="d-flex flex-column align-items-start">
          <li>
            <Link className="link" to="/products/Headphone">
              Headphone
            </Link>
          </li>
          <li>
            <Link className="link" to="/products/Keyboard">
              Keyboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/products/Mouse">
              Mouse
            </Link>
          </li>
        </ul>
      </li>
    )
  },
  Cart: () => {
    return <CartWidget />
  },
  About: () => {
    return (
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
    )
  },
}
export default NavBarItems
