import React from 'react'
import Logo from "../assets/images/logo.svg"
import "../index.css"

const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="Apple"/>
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled">Ipad</a>
                    </li>
                    <li>
                        <a className="link-styled">Iphone</a>
                    </li>
                    <li>
                        <a className="link-styled">Watch</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
