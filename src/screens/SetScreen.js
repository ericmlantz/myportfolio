//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const SetScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Set" />
      <div className="main">
        <Window
          id="Information"
          kind="title"
          windowtitle="Information"
          width="35%"
          marginLeft="10px"
        >
          <div style={{ height: '50vh', overflow: 'scroll' }}>
            <ProjectInfo
              overflow="scroll"
              padding="5%"
              appName="SET Card Game"
              appDescription="A matching, swipe style application for restaurant-goers, developed as a full-stack, M.E.R.N, application during the second unit in my Software Engineering Immersive by General Assembly."
              appTechUsed={['JavaScript', 'HTML', 'CSS', 'Surge Deployment']}
              appGithub="https://github.com/ericmlantz/erics_set_game"
              appDeployed="https://readyset.surge.sh/"
            />
          </div>
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
export default SetScreen
