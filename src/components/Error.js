import React from 'react';

export default function Error({message}) {
    return(
        <div class="flex items-center justify-center pa4 bg-red">        
            <title>error</title>                    
        <span class="lh-title white">{'' + message}</span>
        </div>
    )
}


