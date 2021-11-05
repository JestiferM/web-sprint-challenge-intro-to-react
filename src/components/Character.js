import React from "react";

const Character = (props) => {
    return (
    <>
    <h2>{props.data.name}</h2>
    <p>{props.data.films}</p>
    </>
    )
}
export default Character