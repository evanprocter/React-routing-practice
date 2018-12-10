import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li>
                <Link to="/cats">Cats</Link>
                <ul>
                    <li>
                        <Link to="/cats/oakley">Oakley</Link>
                    </li>
                    <li>
                        <Link to="/cats/milla">Milla</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default NavBar;