// @flow
import React, { useState } from 'react';
import Anime from 'react-anime';

function getColor(type: "success" | "info" | "error") : string { //<- example of flow type checking
  switch (type) {
    case "success" : return "green";
    case "info" : return "blue";
    case "error" : return "#fd5750";
    default: return "#fd5750"; // incase graphql error has no type. i.e Network errors
  }
}

export default function Alert(message : Object) {

    const [hide, setHide] = useState(false);
    console.log(message.message);

    return(
        <div hidden={hide} className="pl0 measure center">
            <div className="flex items-center justify-center pa4 error relative" style={{backgroundColor: getColor(message.type)}}>     
                <a className="close" onClick={() => {setHide(true)}}><i className="fas fa-times"/></a>        
                <title>error</title>                    
            <span className="lh-title white">{message.message.message}</span>
            </div>
        </div>
    )
}