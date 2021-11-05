import React from "react";
import styled from 'styled-components';

const StyledCharacter = styled.div`
border:2px solid gray;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
margin: 15px;
max-width:20%;
`

const Character = (props) => {
    return (
    <StyledCharacter>
    <h2>{props.data.name}</h2>
    <p>{props.data.films}</p>
    </StyledCharacter>
    )
}
export default Character;
