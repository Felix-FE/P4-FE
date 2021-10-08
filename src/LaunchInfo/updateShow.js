import React from 'react'
import UpdateInstance from './UpdateInstance.js'


function UpdateShow(props){
  const [updates, setUpdates] = React.useState(null)
  const launchRequirements = props.launch
  const [formattedUpdates, setFormattedUpdates] = React.useState()
  const [sortedPop, setSortedPop] = React.useState()

  // const formattedUpdates = []
  const sortedPopular = []
  const sortedReliable = []
  const sortedUnreliable = []
  const sortedOfficial = []
  const sortedFalse = []
  const sortedUnverified = []
  const sortedMostReliable = []

  React.useEffect(() => {
    if (launchRequirements){
      setUpdates(launchRequirements['updates'])
      console.log('got the updates')
    } else {
      console.log('no data on updates set')
    }
    
  },[launchRequirements])

  React.useEffect(() => {
    
    const formattedUpdateses = []

    if (updates){
      
      updates.map((update) => {
        const updateInstance = {
          updateLaunch: '',
          updateId: '',
          updateText: '',
          updateSource: '',
          updateUser: '',
          updateType: '',
          dateCreated: '',
          reliableCount: '',
          unreliableCount: '',
          officialCount: '',
          falseCount: '',
          totalCount: '',
          mostReliable: '',
          mostReliableCount: '',
          reliableArray: [],
          unreliableArray: [],
          officialArray: [],
          falseArray: [],

        }
        updateInstance.updateLaunch = update['launch']
        updateInstance.updateId = update['id']
        updateInstance.dateCreated = update['createdAt']
        updateInstance.updateText = update['update']
        updateInstance.updateSource = update['source']
        updateInstance.updateUser = update['owner']['username']
        updateInstance.realibleCount = update['reliable'].length
        updateInstance.unrealibleCount = update['unreliable'].length
        updateInstance.officialCount = update['official'].length
        updateInstance.falseCount = update['false'].length
        updateInstance.totalCount =   (update['reliable'].length) + (update['unreliable'].length) + (update['official'].length) + (update['false'].length)

        update['reliable'].map((user) => {
          updateInstance.reliableArray.push(user)
        })
        update['unreliable'].map((user) => {
          updateInstance.unreliableArray.push(user)
        })
        update['official'].map((user) => {
          updateInstance.officialArray.push(user)
        })
        update['false'].map((user) => {
          updateInstance.falseArray.push(user)
        })
        

        if (update['launchStatus']) {
          updateInstance.updateType = 'launch status'
        } else if (update['timeChange']){
          updateInstance.updateType = 'time change'
        } else if (update['generalAnnouncement']){
          updateInstance.updateType = 'general announcement'
        }

        const largestScore = Math.max((update['reliable'].length), (update['unreliable'].length), (update['official'].length), (update['false'].length))
        updateInstance.mostReliableCount = largestScore
        if (largestScore !== 0){
          if (largestScore === (update['reliable'].length)){
            updateInstance.mostReliable = 'reliable'
          } else if (largestScore === (update['unreliable'].length)){
            updateInstance.mostReliable = 'unreliable'
          } else if (largestScore === (update['official'].length)){
            updateInstance.mostReliable = 'official'
          } else if (largestScore === (update['false'].length)){
            updateInstance.mostReliable = 'false'
          }
        } else {
          updateInstance.mostReliable = 'not verified'
        }

        const dateFormat = update['createdAt'].split('.')
        
        
        updateInstance.dateCreated = dateFormat[0]
        
        formattedUpdateses.push(updateInstance)
        sortedPopular.push(updateInstance)
        sortedMostReliable.push(updateInstance)


      })

      setFormattedUpdates(formattedUpdateses)
    
      sortedPopular.sort((a,b) =>{
        return b.totalCount - a.totalCount
      })

      setSortedPop(sortedPopular)
      

      formattedUpdateses.map((update) => {
        if (update.mostReliable === 'reliable' ){
          sortedReliable.push(update)
        } else if (update.mostReliable === 'unreliable'){
          sortedUnreliable.push(update)
        } else if (update.mostReliable === 'official'){
          sortedOfficial.push(update)
        } else if (update.mostReliable === 'false'){
          sortedFalse.push(update)
        } else if (update.mostReliable === 'not verified'){
          sortedUnverified.push(update)
        }
      })


      sortedReliable.sort((a,b) => {
        return a.mostReliableCount - b.mostReliableCount
      })

      sortedUnreliable.sort((a,b) => {
        return a.mostReliableCount - b.mostReliableCount
      })

      sortedOfficial.sort((a,b) => {
        return a.mostReliableCount - b.mostReliableCount
      })
      
      sortedFalse.sort((a,b) => {
        return a.mostReliableCount - b.mostReliableCount
      })

    } else {
      console.log('no data')
    }

  }, [updates])

  const [selectValueP, setSelectValueP] = React.useState('on')
  const [selectValueR, setSelectValueR] = React.useState('off')
  const [selectValueA, setSelectValueA] = React.useState('off')


  const handleSelect = (e) => {
    const selectValue = e.target.value

    if (selectValue === 'popular'){
      setSelectValueP('on')
      setSelectValueR('off')
      setSelectValueA('off')
    }
    if (selectValue === 'recent'){
      setSelectValueP('off')
      setSelectValueR('on')
      setSelectValueA('off')
    }
    if (selectValue === 'all'){
      setSelectValueP('off')
      setSelectValueR('off')
      setSelectValueA('on')
    }
  } 


  return (
    <section className='updates-wrapper'>
      <div className='update-selectors'>
        <button className={`button-popular ${selectValueP}`} value='popular' onClick={handleSelect} >popular</button>
        <button className={`button-recent ${selectValueR}`} value='recent' onClick={handleSelect} >recent</button>
        <button className={`button-all ${selectValueA}`} value='all' onClick={handleSelect} >all</button>
      </div>
      {(selectValueA === 'on') && 
        <div className='all-updates'>
          <div className='update-list'>
            {formattedUpdates && formattedUpdates.map((update, index) => {
              return (
                <>
                  <UpdateInstance 
                    update={update}
                    key={index}
                  />
                </>
              )
            })

            }
          </div>
        </div>
      }
      {(selectValueP === 'on') && 
        <div className='popular-updates'>
          <div className='update-list'>
            {sortedPop && sortedPop.map((update, index) => {
              return (
                <>
                  <UpdateInstance 
                    update={update}
                    key={index}
                  />
                </>
              )
            })

            }
          </div>
        </div>
      }
      {(selectValueR === 'on') &&
        <div className='recent-updates'>
        </div>
      }
      
      
      
    </section>

  )
}

export default UpdateShow