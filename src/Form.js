import React, { useState } from 'react';

const Form = (props) => {
    console.log(props);

    const { addPlayer, initialPlayer, buttonText, history } = props;

    const [ player, setPlayer ] = useState(initialPlayer || {name:'', class:'', level:'', ilvl:''});

    const handleChange = event => {
        setPlayer({...player, [event.target.name]: event.target.value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        addPlayer(player);
        setPlayer({name:'', class:'', level:'', ilvl:''});
        history.push('localhost:3000');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='name'
                value={player.name}
                name='name'
                onChange={handleChange}
                />
            <input 
                placeholder='class'
                value={player.class}
                name='class'
                onChange={handleChange}
                />
            <input 
                placeholder='level'
                value={player.level}
                name='level'
                onChange={handleChange}
                />
            <input 
                placeholder='ilvl'
                value={player.ilvl}
                name='ilvl'
                onChange={handleChange}
                />
            <button type='submit'>{buttonText}</button>
        </form>
    );
};

export default Form;