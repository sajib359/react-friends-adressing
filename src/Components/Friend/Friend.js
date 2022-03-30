import React from 'react';

const Friend = (props) => {
    const {name , username , address} =props.friend;
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            
        </div>
    );
};

export default Friend;