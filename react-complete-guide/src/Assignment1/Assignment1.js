import React from 'react';

export const UsrInputComponent = (props) => {
    return ( 
        <div>
            <input type="text" onChange={props.change} ></input>
        </div>
    )
}

export const UsrOutputComponent = (props) => {
    return ( 
        <div>
            <p> {props.name} </p>
            <p> Test 2 </p>
        </div>
    )
    
}

