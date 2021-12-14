import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 15%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`
const StyledDiv2 = styled.div`
    margin-top: 1%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

const Form = (props) => {
    console.log(props);

    const { addPlayer, initialPlayer } = props;

    const [ player, setPlayer ] = useState(initialPlayer || {name:'', class:'', level:'', ilvl:''});

    const onChange = event => {
        setPlayer({...player, [event.target.name]: event.target.value});
    };
    const onSubmit = event => {
        event.preventDefault();
        addPlayer();
    };
    return (
        <form onSubmit={onSubmit}>
            <StyledDiv className='inputs'>
            <label>Name
                <input 
                    placeholder='name'
                    value={player.name}
                    name='name'
                    onChange={onChange}
                    />
            </label>

            <label>Class
                <input 
                    placeholder='class'
                    value={player.class}
                    name='class'
                    onChange={onChange}
                    />
            </label>

            <StyledDiv2>
            <label>Level
                <input 
                    placeholder='level'
                    value={player.level}
                    name='level'
                    onChange={onChange}
                    />
            </label>

            <label>iLvl
                <input 
                    placeholder='ilvl'
                    value={player.ilvl}
                    name='ilvl'
                    onChange={onChange}
                    />
            </label>
            </StyledDiv2>
            </StyledDiv>
            
            <button className='submit'>Apply</button>
        </form>
    );
};

export default Form;