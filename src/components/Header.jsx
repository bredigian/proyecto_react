import HeaderIcon from './HeaderIcon'
import NavBar from './NavBar'
const Header=()=>{
    return(
        <header className='w-100 d-flex justify-content-around align-items-center p-5'>
            <HeaderIcon/>
            <NavBar/>
        </header>
    )
}
export default Header