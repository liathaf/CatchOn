import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './style/global.scss';

import {NavBar} from './cmps/NavBar'
import {Events} from './pages/EventsPage'
import Home from './pages/Home'
import {EventEdit} from './pages/EventEdit'
import {EventDetails} from './pages/EventDetails'
import {UserDetails} from './pages/UserDetails'
import {Login} from './pages/Login'
import {SignUp} from './pages/SignUp'

  function App() {
    return (
      <div className="app">
          <NavBar />
        <main className="main-content">
          <Switch>
            <Route exact component={Home} path="/"/> 
            <Route exact component={Login} path="/login" />
          <Route exact component={Events} path="/event/:category" /> 
          {/* <Route exact component={EventEdit} path="/event/edit/:eventId?" />
            <Route exact component={EventDetails} path="/event/:eventId" />
            <Route exact component={UserDetails} path="/user/:userId" />
            <Route exact component={SignUp} path="/signup" /> */}
          </Switch>
        </main>
      </div>
    );
  }

export default App;





