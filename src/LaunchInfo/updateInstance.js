import React from 'react'
import { verifyUpdate } from '../lib/Requests.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faRocket, faClock, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { isAuth, parsePayload } from '../lib/Tokengets.js'
import { Link } from 'react-router-dom'

function UpdateInstance({ update }) {

  const text = update['updateText']
  const source = update['updateSource']
  const user = update['updateUser']
  const type = update['updateType']
  const created = update['dateCreated']
  const rel = update['mostReliable'] 
  const [relIcon, setRelIcon] = React.useState()
  const [relIconColor, setRelIconColor] = React.useState()
  const [typeIcon, setTypeIcon] = React.useState()  
  const authed = isAuth()
  const userId = parsePayload()
  const [userVoteR, setUserVoteR] = React.useState('on')
  const [userVoteU, setUserVoteU] = React.useState('on')
  const [userVoteO, setUserVoteO] = React.useState('on')
  const [userVoteF, setUserVoteF] = React.useState('on')
  const [voted, setVoted] = React.useState(false)

  const [handlerO, setHandlerO] = React.useState(true)
  const [handlerF, setHandlerF] = React.useState(true)
  const [handlerR, setHandlerR] = React.useState(true)
  const [handlerU, setHandlerU] = React.useState(true)
  
  React.useEffect(() =>{
    if (rel === 'reliable'){
      setRelIcon(faCheckCircle)
      setRelIconColor('reliable-tick')
    } else if (rel === 'unreliable'){
      setRelIcon(faTimesCircle)
      setRelIconColor('unreliable-cross')
    } else if (rel === 'official'){
      setRelIcon(faCheckCircle)
      setRelIconColor('official-tick')
    } else if (rel === 'false'){
      setRelIcon(faTimesCircle)
      setRelIconColor('false-cross')
    }

    if (type === 'launch status'){
      setTypeIcon(faRocket)
    } else if (type === 'time change'){
      setTypeIcon(faClock)
    } else if (type === 'general announcement'){
      setTypeIcon(faBullhorn)
    }

    if (update['reliableArray'].includes(userId['sub'])){
      setUserVoteU('off')
      setUserVoteF('off')
      setUserVoteO('off')
      setHandlerO(false)
      setHandlerF(false)
      setHandlerU(false)
    }
    
    if (update['unreliableArray'].includes(userId['sub'])){
      setUserVoteR('off')
      setUserVoteF('off')
      setUserVoteO('off')
      setHandlerR(false)
      setHandlerO(false)
      setHandlerF(false)
    } 
    
    if (update['officialArray'].includes(userId['sub'])){
      setUserVoteR('off')
      setUserVoteF('off')
      setUserVoteU('off')
      setHandlerF(false)
      setHandlerU(false)
      setHandlerR(false)
    } 
    
    if (update['falseArray'].includes(userId['sub'])){
      setUserVoteR('off')
      setUserVoteO('off')
      setUserVoteU('off')
      setHandlerU(false)
      setHandlerR(false)
      setHandlerO(false)
    } 
    
    console.log(voted)
    
  },[authed, rel, type, update, userId, voted])

  const handleWarning = () => {
    console.log('you cant do that')

  }

  const handleSubmit = async(e) => {
    const verifyId = e.target.value
    const updateId = update['updateId']
    const launchId = update['updateLaunch']
    const updateClassName = e.target.className

    if (updateClassName.includes('on')){

      if (userVoteF === 'on' || userVoteO === 'on' || userVoteR === 'on' || userVoteU === 'on'){
        try {
          const result = await verifyUpdate( launchId, updateId, verifyId )
          if (!result) console.log('cant do that')
          console.log(result.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    
    if (voted === false){

      setVoted(true)

      if (verifyId === 'reliable'){
        setUserVoteU('off')
        setUserVoteF('off')
        setUserVoteO('off')
        setHandlerO(false)
        setHandlerF(false)
        setHandlerU(false)
      }
      if (verifyId === 'unreliable'){
        setUserVoteR('off')
        setUserVoteF('off')
        setUserVoteO('off')
        setHandlerR(false)
        setHandlerO(false)
        setHandlerF(false)
      }
      if (verifyId === 'official'){
        setUserVoteR('off')
        setUserVoteF('off')
        setUserVoteU('off')
        setHandlerF(false)
        setHandlerU(false)
        setHandlerR(false)
      } 
      if (verifyId === 'false'){
        setUserVoteR('off')
        setUserVoteO('off')
        setUserVoteU('off')
        setHandlerU(false)
        setHandlerR(false)
        setHandlerO(false)
      } 
    } else {

      setVoted(false)

      if (verifyId === 'reliable'){
        setUserVoteU('on')
        setUserVoteF('on')
        setUserVoteO('on')
        setHandlerO(true)
        setHandlerF(true)
        setHandlerU(true)
      }
      if (verifyId === 'unreliable'){
        setUserVoteR('on')
        setUserVoteF('on')
        setUserVoteO('on')
        setHandlerR(true)
        setHandlerO(true)
        setHandlerF(true)
      }
      if (verifyId === 'official'){
        setUserVoteR('on')
        setUserVoteF('on')
        setUserVoteU('on')
        setHandlerF(true)
        setHandlerU(true)
        setHandlerR(true)
      } 
      if (verifyId === 'false'){
        setUserVoteR('on')
        setUserVoteO('on')
        setUserVoteU('on')
        setHandlerU(true)
        setHandlerR(true)
        setHandlerO(true)
      } 
    }
    
  }

  
  return (
    <div className='update-instance'>
      <div className='user-detail'>
        <h1>{`${user}`}</h1>
        <div className='update-icons'>
          {typeIcon &&
            <FontAwesomeIcon className='type-icon' icon={typeIcon} />
          }
          {relIconColor &&
            <FontAwesomeIcon className={`${relIconColor} rel-icon`} icon={relIcon} />
          }
        </div>
      </div> 
      <div className='info-tab'>
        <div className='update-data'>
          <h1>{`${text}`}</h1>
          <a href={`${source}`}> {`${source}`}</a>
        </div>
        <div className='extra-details'>
          <h2><strong>created at</strong>{` ${created}`}</h2>
        </div>
      </div>
      <div className='verify-buttons'>
        {authed ? (
          <>
            <button className={`button-o ${userVoteO}`} value='official' onClick={(e) => !handlerO ? handleWarning(e) : handleSubmit(e)} >official</button>
            <button className={`button-r ${userVoteR}`} value='reliable' onClick={(e) => !handlerR ? handleWarning(e) : handleSubmit(e)} >reliable</button>
            <button className={`button-u ${userVoteU}`} value='unreliable' onClick={(e) => !handlerU ? handleWarning(e) : handleSubmit(e)} >un-reliable</button>
            <button className={`button-f ${userVoteF}`} value='false' onClick={(e) => !handlerF ? handleWarning(e) : handleSubmit(e)} >false</button>
          </>
        ) : (
          <div className='verify-placeholder'>
            <Link to='/login' className='login-link'>
              sign in to rate
            </Link>
          </div>
        )}
      </div>
    </div>

  )
}

export default UpdateInstance