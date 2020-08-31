import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import UserCreate from './users/UserCreate';
import UserList from './users/UserList';
import Login from './Login';
import Header from './Header';
import history from '../history';

const App = () =>{
 return (
   <div className="ui container">
       
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={UserList} />
                     <Route path="/login" exact component={Login} />
                    <Route path="/users/new" exact component={UserCreate} />
                </Switch>
            </div>
        </Router>
    </div>
 );
};


export default App;