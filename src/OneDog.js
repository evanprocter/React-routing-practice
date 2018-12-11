import React from 'react';

const OneDog = (props) => {
    const dogInfo = props.dogInfo;
    const dogName = props.match.params.dogName;
    const oneDogsInfo = dogInfo[dogName];
    const dogToysListItems = oneDogsInfo.toys.map(toy => {
        return (
            <li>{toy}</li>
        );
    });
    return (
        <div>
          <h1>Hey I am {props.match.params.dogName}.</h1>
          <h2>My owner is {oneDogsInfo.owner}.</h2>
          <ul>
            {dogToysListItems}     
          </ul>
        </div>
    );
};

export default OneDog;