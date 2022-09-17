import NavBarItems from "./NavBarItems"
import CartWidget from "./CartWidget"
const NavBar=()=>{
    return(
        <nav className='navbar d-flex gap-5'>
            <NavBarItems.Home/>
            <NavBarItems.Products/>
            <CartWidget/>
            <NavBarItems.About/>
        </nav>
    )
}
export default NavBar