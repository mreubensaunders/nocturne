import React from 'react';
import Upvote from './Upvote';

const Wishlist = () : Object => {
  return(
    <div className="pa3 pa5-ns">
      <ul className="list pl0 measure center wishlist curvy">
        <li className="request">       
          <div className="controls">
            <div className="button expand"></div>
            <div className="button"></div>
            
          </div> 
          <div className="details">
          Here are some details
          </div>
          <Upvote key={1} />
        </li>
        <li className="request">    
          <div className="controls">    
            <div className="button expand"></div>
            <div className="button"></div>
          </div>          
          <Upvote key={1} />
        </li>
        <li className="request">        
        <div className="controls">    
            <div className="button expand"></div>
            <div className="button close"></div>
            <div className="button"></div>
        </div>                
        </li>
        <li className="request">     
          <div className="controls">                   
            <div className="button close"></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Wishlist;