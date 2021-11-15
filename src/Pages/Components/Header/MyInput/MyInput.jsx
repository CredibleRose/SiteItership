import React from 'react';
import select from './MyInput.module.css'

const MyInput = React.forwardRef((props , ref ) => {
    return (
        <input className={select.poisk} {...props}/>
    );
});

export default MyInput;

