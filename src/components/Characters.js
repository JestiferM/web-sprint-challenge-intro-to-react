import React from "react";
import styled from 'styled-components';

import Character from './Character'

const StyledCharacters = styled.div`
max-width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
/* border:2px solid red; */
font-family: 'Cormorant Garamond', serif;
`
const Characters = (props) => {

    return (
        <StyledCharacters>
        {props.data.map(data => (
            <Character data={data} key={data.mass}/>
        )) }
        </StyledCharacters>
    )
}
export default Characters;
