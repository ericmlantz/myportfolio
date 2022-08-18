//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const DinrScreen = () => {
  const [zIndexing, setZIndexing] = useState(0)

  const handleClick = (event) => {
    event.preventDefault()
    if (event.target.title === 'Information') console.log('clicked')
  }
  //render
  return (
    <>
      <MenuBar title="Dinr" />
      <div className="main">
        <Window
          id="Information"
          kind="title"
          windowtitle="Information"
          width="35%"
          height="75%"
          marginLeft="10px"
          // position="relative"
          // bottom="-10px"
          // left="50px"
          // zIndex={zIndexing}
          // onClick={() => handleClick}
        >
          <ProjectInfo
            appName="Dinr"
            appDescription="A matching, swipe style application for restaurant-goers, developed as a full-stack, M.E.R.N, application during the second unit in my Software Engineering Immersive by General Assembly."
            appTechUsed={[
              'JavaScript using React',
              'Node.js',
              'Express',
              'MongoDB',
              'MongoClient',
              'HTML',
              'CSS',
              'React-Tinder-Cards Library',
              'React-Cookies Library'
            ]}
          />
        </Window>
        <Window
          id="Video"
          kind="title"
          windowtitle="Dinr Preview Video"
          width="80%"
          height="90%"
          margin="10px"
          // onClick={handleClick}
        >
          {/* <img
            src={require('../assets/dinrPreview.gif')}
            alt="loading"
            width="100%"
            height="90%"
          /> */}
        </Window>
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default DinrScreen
