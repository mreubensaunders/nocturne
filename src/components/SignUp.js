//@flow
import React, {useState} from 'react';
import { useMutation } from 'urql';
import Loading from './Loading';
import Error from './Error';
import {
  Redirect
} from 'react-router-dom'

const SignUpQuery = `
mutation($email: String!, $name: String!, $password: String!) {
  signup(email: $email, name: $name, password: $password) {
    token
  }
}`;

const SignUp = () => {

  const [res, executeMutation] = useMutation(SignUpQuery);
  const [success, setSuccess] = useState(false);
  const [_email, setEmail] = useState('');
  const [_name, setName] = useState('');
  const [_password, setPassword] = useState('');
  //'bob@prisma.io' <- valid username
  //'secret43'      <- valid password

  const handleClick = () => executeMutation({email: _email, name: _name, password: _password});

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
    <form className="pa3 pa5-ns">
      {res.fetching ? <Loading/> : <span>{log(res.data)}</span>}
      <div className="pl0 measure center">
        <label className="f6 b db mb2"><span className="normal black-60">username</span></label>
        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
        value={_email}
        onChange={e => setEmail(e.target.value)}
        aria-describedby="name-desc"/>
        <label className="f6 b db mb2"><span className="normal black-60">name</span></label>
        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
        value={_name}
        onChange={e => setName(e.target.value)}
        aria-describedby="name-desc"/>
          <label className="f6 b db mb2"><span className="normal black-60">password</span></label>
        <input id="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" 
        value={_password}
        onChange={e => setPassword(e.target.value)}
        aria-describedby="name-desc"/>
          <label className="f6 b db mb2"><span className="normal black-60">confirm password</span></label>
        <input id="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" 
        value={_password}
        onChange={e => setPassword(e.target.value)}
        aria-describedby="name-desc"/>
        <div className="">
            <a className="f6 link dim ba ph3 pv2 mb2 mt2 dib pink pointer" onClick={handleClick}><i class="fas fa-user-plus"></i></a>
            {/* <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={handleClick}><i className="fas fa-sign-in-alt"></i></a> */}
          </div>
          {res.error && <Error message={res.error}/>}
      </div>
  </form>
  );
};

export default SignUp;