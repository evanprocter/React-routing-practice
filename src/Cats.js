import React from 'react';
import { Link } from 'react-router-dom'

const Cats = (props) => {
    return(
        <div>
            <h1>Catzzzzz</h1>
            <ul>
                <li>
                    <Link to="/cats/oakley">Oakley</Link>
                </li>
                <li>
                    <Link to="/cats/milla">Milla</Link>
                </li>
            </ul>
        </div>
    )
}

export default Cats;