import React from 'react';
import { Link } from 'react-router-dom';

const Dogs = (props) => {

    const dogListItems = props.dogList.map((dogName, index) => {
        return (
            <li key={index}>
                <Link to={`/dogs/${dogName}`}>{dogName}</Link>
            </li>
        );
    });

    return(
        <React.Fragment>
            <h1>DAAAWWWGGGGGSS</h1>
            <ul>
                {dogListItems}
            </ul>
        </React.Fragment>
    );
};

export default Dogs;