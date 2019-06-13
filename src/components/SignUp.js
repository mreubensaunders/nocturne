//@flow
import React, {useState} from 'react';
import { useMutation } from 'urql';
import Loading from './Loading';
import Alert from './Alert';
import {
  Redirect
} from 'react-router-dom'

const SignUpQuery = `
mutation($email: String!, $password: String!, $name: String!) {
  signup(email: $email, password: $password, name: $name) {
    token
  }
}`;

const SignUp = () => {

  const [res, executeMutation] = useMutation(SignUpQuery);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  //'bob@prisma.io' <- valid username
  //'secret43'      <- valid password

  const args = {email, password, name};

  const handleClick = () => executeMutation(args);

  const log = response => {
    if(response != undefined){
      setSuccess(true)
      console.log('jwt: ' + response.signup.token)      
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
        <input id="r-email" autoComplete="off" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        aria-describedby="r-email-desc"/>
        <label className="f6 b db mb2"><span className="normal black-60">name</span></label>
        <input id="r-name" autoComplete="off" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        aria-describedby="name-desc"/>
          <label className="f6 b db mb2"><span className="normal black-60">password</span></label>
        <input id="r-password" autoComplete="off" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        aria-describedby="name-desc"/>
          <label className="f6 b db mb2"><span className="normal black-60">confirm password</span></label>
        <input id="r-confirm-password" autoComplete="off" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        aria-describedby="name-desc"/>
        <div className="">
            <div className="f6 link dim ba ph3 pv2 mb2 mt2 dib blue pointer" onClick={handleClick}><i className="fas fa-user-plus"></i></div>
            {/* <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={handleClick}><i className="fas fa-sign-in-alt"></i></a> */}
          </div>
          {res.error && <Alert message={res.error}/>}
      </div>
  </form>
  );
};

export default SignUp;