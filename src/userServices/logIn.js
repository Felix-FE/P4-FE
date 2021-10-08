import React from 'react'
import { signInUser } from '../lib/Requests.js'
import { setToken } from '../lib/Tokengets.js'
import { useHistory } from 'react-router'

const formDataFormat = {
  username: '',
  password: '',
}

function Login(){
  const history = useHistory()
  const [formData, setFormData] = React.useState(formDataFormat)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const result = await signInUser(formData)
      if (result) {
        setToken(result.data.token)
        console.log(result.data.token)
        history.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='log-in-wrapper'>
      <div className='username-container'>
        <label >username</label>
        <input type='text' name='username' placeholder='enter your username here' onChange={handleChange}></input>
      </div>
      <div className='password-container'>
        <label >password</label>
        <input type='password' name='password' placeholder='enter your password here' onChange={handleChange}></input>
      </div>
      <div className='submit-container'>
        <input type='submit' value='log in' onClick={handleSubmit}/>
      </div>
    </form>
  )
}

export default Login