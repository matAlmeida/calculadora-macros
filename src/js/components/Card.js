import React from 'react';

const Card = ({label, children}) => {
    return (
        <div>
            <h3>
                {label}
            </h3>
            <span>
                {children}
            </span>
        </div>
    );
};

export default Card;
