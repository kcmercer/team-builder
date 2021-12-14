import React from 'react';

export default function Player(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Working fetching the player&apos;s details...</h3>
    }
  
    return (
      <div className='player container'>
        <h2>{details.name}</h2>
        <p>{details.class}</p>
        <p>{details.level}</p>
        <p>{details.ilvl}</p>
      </div>
    )
  }