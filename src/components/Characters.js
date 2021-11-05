import React from "react";
import styled from 'styled-components';

import Character from './Character'

const StyledCharacters = styled.div`

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
