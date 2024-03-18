import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/",
    },
    {
        title: "Menu",
        path: "/",
    },
    {
        title: "Reservations",
        path: "/reservation",
    },
    {
        title: "Order Online",
        path: "/",
    },
    {
        title: "Login",
        path: "/",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuOnClick = () => {
        setShowMenu(!showMenu)
    }

    const list = menuItems.map(({ title, path }) => {
        return (
            <li className="nav-item" key={title} onClick={handleMenuOnClick}>
                <Link to={path}>{title}</Link>
            </li>
        );
    });



    return (
        <nav className="navbar">
            <ul className={`nav-menu ${showMenu?'active':''}`}>{list}</ul>
            <div className={`hamburger ${showMenu?'active':''}`} onClick={handleMenuOnClick}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    );
};

export { Navbar, menuItems };
