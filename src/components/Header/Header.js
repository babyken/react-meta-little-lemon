import {Navbar} from './Navbar'
import Logo from  '../../assets/img/Logo.svg'
import './Header.css'

const Header = ()=> {
    return <header className='header'><img className="logo" src={Logo}  alt="restaurant logo"/><Navbar/></header>
}

export default Header