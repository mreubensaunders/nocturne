import React from 'react';
import WishContent from './WishContent';
import Upvote from './Upvote';

const Wishlist = ({data}) : Object => {
  return(
    <div className="pa3 pa5-ns">
    <div className="list pl0 measure center rs-container">
      <input className="wish-input rs-text" placeholder="type your stuff here..."/>
      <div className="input-btn prime"><i class="far fa-paper-plane"></i></div>
    </div>
    
    
      <ul className="list pl0 measure center wishlist curvy">
      {data &&
            data.map(post => (
        <li className="request">       
          <div className="controls">
            <div className="button expand"></div>
            <div className="button"></div>
            
          </div> 
          <WishContent title={post.title} details={post.content}/>
          <Upvote/>
        </li>
        ))}        
      </ul>
    </div>
  )
}

export default Wishlist;