import React from "react";
import styled from 'styled-components';

import Character from './Character'

const StyledCharacters = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

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
