import React from 'react';
import Anime from 'react-anime';

export default function Loading() {

    const style = {        
        margin: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: 0,
        letterSpacing: '0.2em',
        backgroundColor: 'aquamarine',
        display: 'block'                 
    }

    let animeProps = {                
        width: '100%', // -> from '0px' to '100%',
        easing: 'easeInOutQuad',
        direction: '',
        loop: true
    }

    return(
        <Anime  {...animeProps}>
            <div style={style} className="rs-load"></div>   
        </Anime>
    )
}