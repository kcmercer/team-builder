import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 25%;
    display: inline-block;
`

const StyledH2 = styled.h2`
    width: 100%;
    font-size: 2rem;
    font: 'Times New Roman';
    margin-top: 1;
    margin-bottom: 0;
`

const StyledP = styled.p`
    width: 100%;
`

export default function Player(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Working fetching the player&apos;s details...</h3>
    }
  
    return (
      <StyledDiv className='player container'>
        <StyledH2>{details.name}</StyledH2>
        <StyledP>{details.class} ({details.ilvl})</StyledP>
        <StyledP> Level - {details.level}</StyledP>
      </StyledDiv>
    )
  }