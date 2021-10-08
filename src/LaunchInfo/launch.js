// import axios from 'axios'
import React from 'react'
import UpdateShow from './UpdateShow.js'
import { useParams } from 'react-router'
import { getLaunch } from '../lib/Requests.js'
import UpdateCard from './UpdateCard.js'
import { isAuth } from '../lib/Tokengets.js'
import LaunchInfo from './LaunchInfo.js'
import TwitterFeed from './TwitterFeed.js'

function LaunchDetail() {
  const [launch, setLaunch] = React.useState()
  const { launchId } = useParams()
  const auth = isAuth()

  React.useState(() => {

    const getData = async() => {
      try {
        const result = await getLaunch(launchId)
        setLaunch(result.data)
      } catch (err) {
        console.log(err)
      }
    }  
    getData()

  },[])

  return (
    <div className='launch-page'>
      <div className='3D-wrapper'>
      </div>
      <div className='launch-info'> 
        <div className='top-tab'>
          <h1>launch info</h1>
        </div>
        <LaunchInfo launch={launch}/>
        <TwitterFeed launch={launch}/>
      </div>
      <div className='update-section' >
        <UpdateShow launch={launch}></UpdateShow>
        <UpdateCard auth={!auth ? null : <h1>log in to create an update</h1>}/>
      </div>
    </div>
  )
}

export default LaunchDetail