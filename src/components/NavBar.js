import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    return (
        <>
            <nav id="myNav">
                <div className="navbar-home">
                    <Link className="navbar-home-icon" to="/trvl">TRVL
                        <i className="fab fa-typo3 ml-1" />
                    </Link>
                    <button className="navbar-icon">
                        <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick} />
                    </button>
                </div>
                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/trvl" onClick={handleClick}>Home</Link>
                    </li>
                    {/* <div className="nav-item-hover"></div> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/services" onClick={handleClick}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products" onClick={handleClick}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-up" onClick={handleClick}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
