import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
//import * as serviceWorker from './serviceWorker';
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'
import 'tachyons';

import { Provider, createClient } from 'urql';
import {StateProvider} from './AppState';

const client = createClient({
  url: 'http://localhost:4000/', // Your GraphQL endpoint here
});

const initialState = {
    theme: { primary: 'white' }
};
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'changeTheme':
        return {
            ...state,
            theme: action.newTheme
        };
        
        default:
        return state;
    }
};  

ReactDOM.render(<StateProvider initialState={initialState} reducer={reducer}> 
                    <Provider value={client}>
                    <Router>  
                    <nav className="pa3 pa4-ns"> 
                        <NavLink
                            className="link dim f6 f5-ns dib mr3 black"
                            activeClassName="pink"
                            exact={true}
                            to="/"
                            title="home">
                            home
                        </NavLink>    
                        <NavLink
                            className="link dim f6 f5-ns dib mr3 black"
                            activeClassName="pink"
                            exact={true}
                            to="/login"
                            title="login">
                            login
                        </NavLink> 
                    </nav>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                    </Router>
                    </Provider>
                </StateProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
