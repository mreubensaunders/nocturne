// @flow
import React, { useState } from 'react';

//return array of 2 hex colours for alert box depending on 'type'
function getColour(type: "success" | "info" | "error") : Array<string> { //<- example of flow type checking
>>>>>>> master
  switch (type) {
    case "success" : return ["black", "aquamarine"];
    case "info" : return ["white", "blue"];
    case "error" : return ["white", "#fd5750"];
    default: return ["white", "#fd5750"]; // incase graphql error has no type. i.e Network errors
  }
}

export default function Alert(message : Object) {

    const [hide, setHide] = useState(false);    
    
    console.log(message);
    
    const colour = getColour(message.type);

    return(        
        <div hidden={hide} className="pl0 measure center">
            <div className="flex items-center justify-center pa4 error relative" style={{backgroundColor: colour[1]}}>     
                <a className="close" onClick={() => {setHide(true)}}><i className="fas fa-times"/></a>        
                <title>error</title>                    
            <p style={{color: colour[0]}} className="lh-title error-msg">{message.message.message}</p>
            </div>
        </div>
    )
}