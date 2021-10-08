import React from 'react'
import Login from '../userServices/LogIn'
import LaunchList from './main'

function HomePage(){
  // const [user, setUser] = React.useState()
  
  // const auth = isAuth()
  


  return (
    <section className='dash-wrapper'>
      <div className='dash-left'>
        <div className='user-profile-dash'>
          <Login /> 
        </div>
        <div className='follow-dash'>
          <h1> log in to see your updates </h1>
        </div>
      </div>
      <div className='dash-right'>
        <LaunchList />  
      </div>
    </section>
  )
}

export default HomePage