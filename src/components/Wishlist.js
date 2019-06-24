import React, { useState } from 'react';
import WishContent from './WishContent';
import Upvote from './Upvote';
import { useMutation } from 'urql';
import Alert from './Alert';

const PostQuery = `
mutation($title: String!, $content: String!) {
  createPost(title: $title, content: $content) {
    id
  }
}`;

const DeleteQuery = `
mutation($id: ID!){
  deletePost(id: $id){
    id 
  }
}`;

const Wishlist = ({data}) : Object => {

  const [res, postMutation] = useMutation(PostQuery);
  const [delRes, deleteMutation] = useMutation(DeleteQuery);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("http://localhost:3000/");

  const args = {title, content};  

  const handlePost = () => postMutation(args)   

  return(
    <div className="pa3 pa5-ns">
    {res.error && <Alert message={res.error}/>}  
    <div className="list pl0 measure center rs-container">
      <input className="wish-input rs-text" onChange={e => {setTitle(e.target.value)}} placeholder="type your stuff here..."/>      
      <div className="input-btn prime" onClick={() => {handlePost()}}><i className="far fa-paper-plane"></i></div>
    </div>
      <ul className="list pl0 measure center wishlist curvy">
      {data &&
            data.map(post => (
        <li key={post.id} className="request">        
          <div className="controls">
            <div className="button expand"></div>
            <div onClick={() => {deleteMutation({id: post.id})}} className="button close"></div>
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