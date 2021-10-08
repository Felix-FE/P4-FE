import React from 'react'
import { signUpUser } from '../lib/Requests.js'



const formFormat =  {
  username: '',
  email: '',
  avatar: '',
  password: '',
  password_confirmation: '',
}

function Signup(){

  const [formData, setFormData] = React.useState(formFormat)

  function handleInput(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  async function handleSubmit(e){
    e.preventDefault()

    try {
      const result = await signUpUser(formData)
      if (result){
        console.log(result.data)
      }
    } catch (err) {
      console.log(err.data)
    }
  }


  return (
    <form>
      <div>
        <label >username</label>
        <input type='text' name='username' placeholder='enter a username' onChange={handleInput}/>
      </div>
      <div>
        <label >avatar</label>
        <input type='text' name='avatar' placeholder='pic an image for an avatar' onChange={handleInput}/>
      </div>
      <div>
        <label >email</label>
        <input type='text' name='email' placeholder='enter an email' onChange={handleInput}/>
      </div>
      <div>
        <label >password</label>
        <input type='text' name='password' placeholder='enter a password' onChange={handleInput}/>
      </div>
      <div>
        <label >password confirmation</label>
        <input type='text' name='password_confirmation' placeholder='confirm your password' onChange={handleInput}/>
      </div>
      <input type='submit' onClick={handleSubmit} value='submit'/>
    </form>
  )
}

export default Signup