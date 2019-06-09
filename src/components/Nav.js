import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Nav() {

    return(
        <nav className="dt w-100 mw8 center"> 
              <div className="dtc w2 v-mid pa3">
                <a href="/">                  
                    <i className="far fa-moon pink"></i>
                </a>
              </div>
              <div className="dtc v-mid tr pa3">
                <NavLink
                    className="f6 fw4 hover-pink no-underline black-70 dn dib-ns pv2 ph3"
                    activeClassName="pink"
                    exact={true}
                    to="/"
                    title="home">
                    Hello
                </NavLink>
                <NavLink
                    className="f6 fw4 hover-pink no-underline black-70 dib ml2 pv2 ph3 ba"
                    activeClassName="pink"
                    exact={true}
                    to="/login"
                    title="login">
                    Sign In
                </NavLink> 
              </div>
            </nav> 
    )
}