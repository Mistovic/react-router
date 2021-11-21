import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'black'
    }
    return (
        <nav className="Nav">
            <Link to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="Nav__list">
                <Link to="/components/about" style={navStyle}>
                    <li className="Nav__list-item">About</li>
                </Link>

                <Link to="/components/shop" style={navStyle}>
                    <li className="Nav__list-item">Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;