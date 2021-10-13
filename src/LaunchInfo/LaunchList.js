import React from 'react'
import { getAllLaunches } from '../lib/Requests.js'
import { Link } from 'react-router-dom'

function LaunchList() {
  const [launches, setLaunches] = React.useState()
  const [formattedLaunches, setFormattedLaunches] = React.useState()

  React.useEffect(() => {

    const getData = async() => {
      try { 
        const results = await getAllLaunches()
        if (!results){
          console.log('there aint nothing here')
        }
        setLaunches(results.data)
      } catch (err){
        console.log(err)
      }   
    }
    getData()
  },[])


  React.useEffect(() => {
  
    const launchesTruncated = []
    if (launches){
      launches.map((launch) => {
        const launchDate = launch['dateTime'].split(' ')
        const dateFormat = launchDate[2].split('-')
        const launchYear = dateFormat[0]
        let launchMonth = dateFormat[1]
        const launchDayTimeSplit = dateFormat[2].split('T')
        const launchDay = launchDayTimeSplit[0]
        const launchTime = launchDayTimeSplit[1]

        if ( launchMonth === '01' ){
          launchMonth = 'January'
        } else if ( launchMonth === '02' ){
          launchMonth = 'Februrary'
        } else if ( launchMonth === '03' ){
          launchMonth = 'March'
        } else if ( launchMonth === '04' ){
          launchMonth = 'April'
        } else if ( launchMonth === '05' ){
          launchMonth = 'May'
        } else if ( launchMonth === '06' ){
          launchMonth = 'June'
        } else if ( launchMonth === '07' ){
          launchMonth = 'July'
        } else if ( launchMonth === '08' ){
          launchMonth = 'August'
        } else if ( launchMonth === '09' ){
          launchMonth = 'September'
        } else if ( launchMonth === '10' ){
          launchMonth = 'October'
        } else if ( launchMonth === '11' ){
          launchMonth = 'November'
        } else if ( launchMonth === '12' ){
          launchMonth = 'December'
        }

        console.log(launchTime)

        launchesTruncated.push({
          year: `${launchYear}`,
          month: `${launchMonth}`,
          day: `${launchDay}`,
          payload: `${launch['payloadName']}`,
          rocket: `${launch['rocketConfig']}`,
        })
        
      })
      setFormattedLaunches(launchesTruncated)
    } else {
      console.log('notloaded')
    }

  }, [launches])



  return (
    <section className='launch-wrapper'>
      <div className='listLaunch-title'>
        <h1>Upcoming launches</h1>
      </div>
      <div className='launch-categories'>
        <h1>date</h1>
        <h1>payload</h1>
        <h1>rocket</h1>
      </div>
      <div className='launch-list'>
        { !formattedLaunches ? (<h1>loading</h1> 
        ) : (
          formattedLaunches.map((launch, index) => {
            return (
              <Link className='launch-truncated' key={index} to={`/launches/${launches[index]['id']}`}>
                <div className='datePayload-segment'>
                  <h1>{launch['month']}</h1>
                  <h1 className='day-launch'>{launch['day']}</h1>
                  <h1>{launch['payload']}</h1>
                </div>
                <div className='rocket-segment'>
                  <h1>{launch['rocket']}</h1>
                </div>
              </Link>
            )
          })
        )}
      </div>
    </section>  
    
  )
}

export default LaunchList