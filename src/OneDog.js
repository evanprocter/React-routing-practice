import React from 'react';

const OneDog = (props) => {
    return (
        <h1>Hey I am {props.match.params.dogName}.</h1>
    );
};

export default OneDog;