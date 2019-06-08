//@flow
import React, {useState} from 'react';
import { useMutation } from 'urql';
import Loading from './Loading';
import {
  Redirect
} from 'react-router-dom'

const loginQuery = `
mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}`;

const Login = () => {

  const [res, executeMutation] = useMutation(loginQuery);
  const [success, setSuccess] = useState(false);
  const [_email, setEmail] = useState('arcaneflorist');
  const [_password, setPassword] = useState('secret43');

  //'bob@prisma.io'
  //secret43

  const handleClick = () => executeMutation({ email: _email, password: _password });  

  const log = response => {
    if(response != undefined){
      setSuccess(true)
      console.log('jwt: ' + response.login.token)      
    }
  }

  if(success)
    return <Redirect to='/'></Redirect>

  // if(res.error)
  //   return 'oh no ' + res.error

  return (    
    <main className="pa4 black-80">      
      {res.fetching ? <Loading/> : <span>{log(res.data)}</span>}
      
      <form className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6">username</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          value={_email}
          onChange={e => setEmail(e.target.value)}
          type="email"/>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6">password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          value={_password}
          onChange={e => setPassword(e.target.value)}
          type="password"/>
        </div>      
      </fieldset>
      <div className="">
        <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={handleClick}><i className="fas fa-sign-in-alt"></i></a>
      </div>
      <div className="lh-copy mt3">
        <span>{res.error && 'oops ' + res.error}</span>
        {/* <a href="#0" className="f6 link dim black db">Sign up</a>
        <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
      </div>
    </form>
  </main>    
  );
};

export default Login;