import NavBarItems from "./NavBarItems"
const NavBar=()=>{
    return(
        <nav className='navbar d-flex gap-5'>
            <NavBarItems.Home/>
            <NavBarItems.Products/>
            <NavBarItems.Shop/>
            <NavBarItems.About/>
        </nav>
    )
}
export default NavBar