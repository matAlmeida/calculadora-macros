import React from 'react';

const Button = ({ id, children }) => {
    return (
        <button id={id}>
            {children}
        </button>
    );
};

export default Button;
