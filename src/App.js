import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './userServices/Navbar.js'
import Login from './userServices/LogIn.js'
import Signup from './userServices/SignUp.js'
import UserDashboard from './userServices/UserDash.js'
import AccountSettings from './userServices/Account.js'
import LaunchDetail from './launchInfo/Launch.js'


function App() {


  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Signup />
        </Route>
        <Route path='/account'>
          <AccountSettings />
        </Route>
        <Route path='/launches/:launchId'>
          <LaunchDetail />
        </Route>
        <Route path='/'>
          <UserDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
