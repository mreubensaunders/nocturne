//@flow
import React, {useState} from 'react';
import { useMutation } from 'urql';
import Loading from './Loading';
import Alert from './Alert';
import { useStateValue  } from '../AppState';
import {
  NavLink,
  Redirect
} from 'react-router-dom'

const LoginQuery = `
mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}`;


const Login = () => {
  
  const [{ token }, dispatch] = useStateValue();

  const [res, executeMutation] = useMutation(LoginQuery);
  const [success, setSuccess] = useState(false);
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  //'bob@prisma.io' <- valid username
  //'secret43'      <- valid password

  const handleClick = () => executeMutation({ email: _email, password: _password });  

  const log = response => {
    if(response != undefined){
      const jwtToken = response.login.token;
      setSuccess(true)
      dispatch({
                type: 'setToken',
                newToken: jwtToken
              })
      console.log('jwt: ' + jwtToken)      
    }
  }

  if(success)
    return <Redirect to='/'></Redirect>

  return (    
    <form className="pa3 pa5-ns">
      {res.fetching ? <Loading/> : <span>{log(res.data)}</span>}
      <div className="pl0 measure center">
        <label className="f6 b db mb2"><span className="normal black-60">username</span></label>
        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
        value={_email}
        onChange={e => setEmail(e.target.value)}
        aria-describedby="name-desc"/>
          <label className="f6 b db mb2"><span className="normal black-60">password</span></label>
        <input id="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" 
        value={_password}
        onChange={e => setPassword(e.target.value)}
        aria-describedby="name-desc"/>
        <div className="">
            <div className="f6 link dim ba ph3 pv2 mb2 mt2 dib blue pointer" onClick={handleClick}><i className="fas fa-sign-in-alt"></i></div>
            {/* <a className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={handleClick}><i className="fas fa-sign-in-alt"></i></a> */}
          </div>
          <NavLink
                    className="f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2"
                    activeClassName="blue"
                    exact={true}
                    to="/signup"
                    title="signup">
                    Sign Up
                </NavLink>
                {res.error && <Alert message={res.error}/>}
        {/* <small id="name-desc" className="f6 red db mb2">{res.error && '' + res.error}</small> */}
      </div>
  </form>
  );
};

export default Login;