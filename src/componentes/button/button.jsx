import React from 'react';
import './button.css';

const alertTextLabel = (label)=> {
    alert('A label desse botão é ' + label);
};

const Button =({label = 'Clique aqui'})=> {
    return (
        <button className='btn' onClick={()=> alertTextLabel(label)}>
            {label}
        </button>
    );
};

export default Button;