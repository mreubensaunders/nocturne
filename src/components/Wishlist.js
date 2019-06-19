import React from 'react';

const Wishlist = () : Object => {
  return(
    <div className="pa3 pa5-ns">
    <div className="list pl0 measure center rs-container">
      <input className="wish-input" placeholder="type your wish here..."/>
      <div className="input-btn prime"><i class="far fa-paper-plane"></i></div>
    </div>
    
    
      <ul className="list pl0 measure center wishlist curvy">
        <li className="request">       
          <div className="controls">
            <div className="button expand"></div>
            <div className="button"></div>
            
          </div> 
          
          <div className="vote-container">    
          <div className="v-button"><i class="fas fa-chevron-up"></i></div>
          <div className="v-button"><i class="fas fa-chevron-down"></i></div>            
        </div>
        </li>
        <li className="request">    
          <div className="controls">    
            <div className="button expand"></div>
            <div className="button"></div>
          </div>
          <div className="title">Need some milk! 🥛🥛🥛</div>
          <div className="details">
          We ran out :(
          </div>
          <div className="vote-container">    
          <div className="v-button"><i class="fas fa-chevron-up"></i></div>
          <div className="v-button"><i class="fas fa-chevron-down"></i></div>            
        </div>
        </li>
        <li className="request">        
        <div className="controls">    
            <div className="button expand"></div>
            <div className="button close"></div>
            <div className="button"></div>
        </div>        
        <div className="vote-container">    
          <div className="v-button"><i class="fas fa-chevron-up"></i></div>
          <div className="v-button"><i class="fas fa-chevron-down"></i></div>            
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