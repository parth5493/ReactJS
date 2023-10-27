import React from 'react';

export default function PropsinFunCompo(prop) {
    return(
        <>
            <p>We have to pass prop keyword as a parameter in function component.</p>
            <p>Syntax: <b>prop.attribute_name</b></p>
            <p>Syntax: <b>prop.object_name.key_name</b></p>
            {/*<p>{prop.text}</p>*/}
            <p>My name is {prop.detail.name}.</p>
        </>
    )
}