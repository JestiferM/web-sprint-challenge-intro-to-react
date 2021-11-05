import React from "react";
import Character from './Character'


const Characters = (props) => {

    return (
        <div className='main'>
        {props.data.map(data => (
            <Character data={data} key={data.mass}/>
        ))}
        </div>
    )
}
export default Characters;