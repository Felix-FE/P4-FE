import LaunchList from '../launchInfo/Main.js'
import { isAuth } from '../lib/Tokengets.js'
import React from 'react'
import { getUserInfo } from '../lib/Requests.js'
import { Link } from 'react-router-dom' 

function UserDashboard(){
  const [user, setUser] = React.useState()
  const [auth, setIsAuth] = React.useState()

  React.useState(() => {
    setIsAuth(isAuth())
  },[])

  React.useEffect(() => {
    
    const getData = async() => {
      try {
        const result = await getUserInfo()
        if (!result) console.log('no user')
        console.log(result.data)
        setUser(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[auth])

  console.log(user)

  return (
    <section className='dash-wrapper'>
      <div className='dash-left'>
        <div className='user-profile-dash'>
          {!user ? ( 
            <Link to='/login' className='button'>log in</Link>
          ) : (
            <div className='user-info'>
              <div className='user-avatar'>
              </div>
              <h1>{`${user['username']}`}</h1>
              <h1>{`${user['email']}`}</h1>
              <h1>{`updates posted: ${user['updatesPosted'].length}`}</h1>
            </div>
          )}
        </div>
        <div className='follow-dash'>
        </div>
      </div>
      <div className='dash-right'>
        <LaunchList />  
      </div>
    </section>
  )
}

export default UserDashboard