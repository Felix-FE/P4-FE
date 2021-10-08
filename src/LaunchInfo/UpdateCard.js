import React from 'react'
import { useParams } from 'react-router-dom'
import { postUpdate } from '../lib/Requests.js'


function UpdateCard(props) {
  // const [data, setData] = React.useState()
  const isAuth = props.auth
  const { launchId } = useParams()

  const [formData, setFormData] = React.useState({
    update: '',
    source: '',
    launch_status: null,
    time_change: null,
    general_announcements: null,

  })


  const handleRadioChange = (e) => {
    if (e.target.value === 'launch-status') {
      setFormData({ ...formData, ['launch_status']: true ,['general_announcements']: false, ['time_change']: false })
    } else if (e.target.value === 'general-announcements'){
      setFormData({ ...formData, ['launch_status']: false, ['general_announcements']: true, ['time_change']: false  })
    } else if (e.target.value === 'time-change'){
      setFormData({ ...formData, ['launch_status']: false, ['general_announcements']: false, ['time_change']: true  })
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    console.log(formData)
    try {
      const result = await postUpdate(formData, launchId)
      console.log(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <div className='recent updates'></div>
      <div className='top updates'></div>
      <div className='update-submit'>
        {!isAuth ? (
          <div>
            <h1>lots a beans</h1>
          </div>
        ) : (
          <form className='update-form'>
            <div className='update-create-tab'>
              <h1>post an update</h1>
            </div>
            <div className='update-type-container'>
              <input type='radio' name='update-type' id='launch-status' value='launch-status' onClick={handleRadioChange}></input>
              <label htmlFor='launch-status'>launch status</label>
              <input type='radio' name='update-type' id='launch-time-change' value='time-change' onClick={handleRadioChange}></input>
              <label htmlFor='launch-time-change'>time change</label>
              <input type='radio' name='update-type' id='general-announcement' value='general-announcements' onClick={handleRadioChange}></input>
              <label htmlFor='general-annoucement'>general announcement</label>
            </div>
            <div className='describe-container'>
              <textarea name='update' placeholder='write your update here' rows='4' cols='50' onChange={handleChange}></textarea>
            </div>
            <div className='source-container'>
              <input  type='text' name='source' placeholder='write the source here' onChange={handleChange}></input>
            </div>
            <div className='submit-container '>
              <input className='button' type='submit' value='submit'  onClick={handleSubmit} />
            </div>
          </form>

        )}
        <form></form>
      </div>
    </section>
  )
}

export default UpdateCard