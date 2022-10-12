import NavBarItems from "./NavBarItems"
const NavBar = () => {
  return (
    <nav className="navbar d-flex align-items-end gap-5">
      <NavBarItems.Home />
      <NavBarItems.Products />
      <NavBarItems.Cart />
      <NavBarItems.About />
    </nav>
  )
}
export default NavBar
