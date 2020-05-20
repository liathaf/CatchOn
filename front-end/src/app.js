import React from 'react';
import { Route, Switch } from 'react-router-dom'

import {NavBar} from './cmps/NavBar'
import {EventApp} from './pages/EventApp'
import {EventEdit} from './pages/EventEdit'
import {EventDetails} from './pages/EventDetails'
import {UserDetails} from './pages/UserDetails'
import {Login} from './pages/Login'
import {SignUp} from './pages/SignUp'

  function App() {
    return (
      <div className="app">
        <header>
          {/* <NavBar /> */}
          <h2>hi</h2>
        </header>
        <main className="main-content">
          <Switch>
            {/* <Route exact component={EventApp} path="/event" />
            <Route exact component={EventEdit} path="/event/edit/:eventId?" />
            <Route exact component={EventDetails} path="/event/:eventId" />
            <Route exact component={UserDetails} path="/user/:userId" />
            <Route exact component={Login} path="/login" />
            <Route exact component={SignUp} path="/signup" /> */}
          </Switch>
        </main>
      </div>
    );
  }

export default App;





