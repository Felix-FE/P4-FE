import axios from 'axios'
import React from 'react'
import Countdown from 'react-countdown'


function LaunchInfo(props) {
  const [lon, setLon] = React.useState()
  const [lat, setLat] = React.useState()
  const [weather, setWeather] = React.useState()
  const [weatherIcon, setWeatherIcon] = React.useState()
  const APIKeyWeather = process.env.REACT_APP_API_WEATHER_KEY
  const launchData = props.launch
  const [time, setTime] = React.useState()
  const [currentWeather, setCurrentWeather] = React.useState()
  const [currentWeatherIcon, setCurrentWeatherIcon] = React.useState()
  
  
  React.useEffect(() => {
    if (launchData){
      setTime(launchData['dateTime'].split(' ')[2])
      const lonlat = launchData['location'].split(' ')
      setLon(lonlat[0])
      setLat(lonlat[1])
    }
  },[launchData])
  

  React.useEffect(() => {

    const getData = async() =>{
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKeyWeather}`)
        if (result){
          const rawData = result.data
          const timeZoneOffset = rawData.timezone_offset
          
          const takeoffTime = new Date(time)
          const standardTakeoffTime = takeoffTime.setHours(0,0,0,0)

          const launchWeather = result.data.daily.find((day) => {
            const date = new Date(((day.dt - timeZoneOffset) * 1000))
            const standardDate = date.setHours(0,0,0,0)
            return standardDate === standardTakeoffTime
          })

          if (launchWeather){
            setWeather(launchWeather.weather[0].description)
            setWeatherIcon(`http://openweathermap.org/img/wn/${launchWeather.weather[0].icon}@2x.png`)
          }
          
          setCurrentWeather(result.data.daily[0].weather[0].description)
          setCurrentWeatherIcon(`http://openweathermap.org/img/wn/${result.data.daily[0].weather[0].icon}@2x.png`)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getData()
    
  },[launchData, lon, lat, weather, weatherIcon])


  return (
    <section className='info-wrapper'>
      <div className='title-header'>
        {launchData && 
        <>
          <h1>{`${launchData['launchName']}`}</h1>
          <h2>{`${launchData['launchProvider']}`}</h2>
        </>
        }
      </div>
      <div className='data-header'>
        {launchData && 
        <>
          <h1>Payload Mission</h1>
          <h2>{`${launchData['payloadMission']}`}</h2>
        </>
        }
      </div>
      <div className='count-down'>
        <h1>T-  </h1>
        <Countdown className='countdown' date={`${time}`}/>
      </div>
      <div className='weather-wrapper'>
        {weatherIcon ? (
          <div className='weather-icon'>
            <h1>weather on day of launch</h1>
            <img src={weatherIcon}/>
            <div>{weather}</div>
          </div>
        ) : (
          <div className='weather-icon'>
            <h1>Current Weather at launch Site</h1>
            <img src={currentWeatherIcon}/>
            <div>{currentWeather}</div>
          </div>
        )
        }
      </div>  
    </section>
    

  )
}

export default LaunchInfo