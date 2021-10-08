import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function TwitterFeed(props) {
  const launchInfo = props.launch
  const [twitterHandleProv, setTwitterHandleProv] = React.useState()
  const [check, setCheck] = React.useState()
  const [launchProv, setLaunchProv] = React.useState()
  const launchProviders = [
    { launchProvider: 'Indian Space Research Organization',
      twitterHandle: 'isro',
    },
    { launchProvider: 'Rocket Lab Ltd',
      twitterHandle: 'Rocketlab',
    },
    { launchProvider: 'China Aerospace Science and Industry Corporation',
      twitterHandle: 'CGWIC',
    },
    { launchProvider: 'United Launch Alliance',
      twitterHandle: 'ulalaunch',
    },
    { launchProvider: 'SpaceX',
      twitterHandle: 'SpaceX',
    },
    { launchProvider: 'Arianespace',
      twitterHandle: 'Arianespace',
    },
    { launchProvider: 'TiSPACE',
      twitterHandle: 'LaunchService',
    }
  ]

  React.useEffect(() => {
    if (launchInfo){
      setLaunchProv(launchInfo['launchProvider'])
    } else {
      setCheck(true)
    } 

    if (launchProv){
      const matchedProvider = launchProviders.find((provider) => {
        return provider.launchProvider === launchProv
      })
  
      const providerTwitterHandle = matchedProvider.twitterHandle
  
      setTwitterHandleProv(providerTwitterHandle)
      
    } 

  },[launchProv, check, launchInfo])

  return (
    <>
      {twitterHandleProv && 
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitterHandleProv}
          options={{ height: 300 }}
        />
      }
    </>
  )
}


export default TwitterFeed