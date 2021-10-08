import React from 'react'
import { useHistory } from 'react-router-dom'
import { removeToken } from '../lib/Tokengets'


function AccountSettings(){
  const history = useHistory()

  function handleLogOut(){
    removeToken()
    history.push('/')
  }

  return (
    <section>
      <div className='button' onClick={handleLogOut}>logout</div>
    </section>
    
  )
}

export default AccountSettings