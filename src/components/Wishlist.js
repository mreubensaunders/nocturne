import React from 'react';
import WishContent from './WishContent';

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
          <WishContent title="Need milk! please 🥛🥛🥛" details="milk atm is 2 days out of date"/>
          
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
          <WishContent title="Alice's birthday on Wednesday!" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"/>
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
        <WishContent title={'Check me out'} details="http://www.arcaneflorist.com/"/>
        <div className="vote-container">    
          <div className="v-button"><i class="fas fa-chevron-up"></i></div>
          <div className="v-button"><i class="fas fa-chevron-down"></i></div>            
        </div>
        </li>
        <li className="request">     
          <div className="controls">                   
            <div className="button close"></div>
          </div>
          <WishContent title={"🍆🍑"} details={"ヽ(°□°ヽ)"}/>
          <div className="vote-container">    
          <div className="v-button"><i class="fas fa-chevron-up"></i></div>
          <div className="v-button"><i class="fas fa-chevron-down"></i></div>            
        </div>
        </li>
      </ul>
    </div>
  )
}

export default Wishlist;