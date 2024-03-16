import './Navbar.css';
import {Link} from 'react-router-dom'

const menuItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/'
    },
    {
        title: 'Menu',
        path: '/'
    },
    {
        title: 'Reservations',
        path: '/reservation'
    },
    {
        title: 'Order Online',
        path: '/'
    },
    {
        title: 'Login',
        path: '/'
    },
]

const Navbar = () => {
    const list = menuItems.map(({title, path} ) => {
        return (
            <li key={title}>
                <Link to={path}>
                {title}</Link>
            </li>
        )
    })
    return (
        <nav className='navbar'>
        <ul>{list}</ul>
        </nav>
    )
}


export { Navbar, menuItems };