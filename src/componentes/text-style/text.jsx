import React from 'react';
import './style-text.css';

function Text({cor}) {
    const estilo = {
        color: cor || 'white',
    };

    const textParagrafo = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae dolorum omnis tenetur assumenda necessitatibus obcaecati accusantium? Odio, aut pariatur eius cum quae illo rem? Eveniet distinctio officiis sunt dolor.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae dolorum omnis tenetur assumenda necessitatibus obcaecati accusantium? Odio, aut pariatur eius cum quae illo rem? Eveniet distinctio officiis sunt dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae dolorum omnis tenetur assumenda necessitatibus obcaecati accusantium? Odio, aut pariatur eius cum quae illo rem? Eveniet distinctio officiis sunt dolor.',
    ];    

    return (
        <>
            {textParagrafo.map((texto, index)=> (
        <p key={index} className='text' style={estilo}>
            {texto}
        </p>

    ))}
        </>
    );
}

export default Text
