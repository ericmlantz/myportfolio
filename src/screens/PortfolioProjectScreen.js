//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const PortfolioProjectScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Set" />
      <div className="main">
        <Window
          id="Information"
          kind="title"
          windowtitle="App Overview"
          width="70vh"
          marginLeft="10px"
        >
          <div style={{ height: '47vh', overflow: 'scroll' }}>
            <ProjectInfo
              overflow="scroll"
              padding="5%"
              appName="SET Card Game"
              appDescription="The card game, SET, made using HTML, CSS, and Javascript. Designed in one week during a Software Engineering Immsersive Course from General Assembly."
              appTechUsed={['JavaScript', 'HTML', 'CSS', 'Surge Deployment']}
              appGithub="https://github.com/ericmlantz/erics_set_game#readyset"
              appDeployed="https://readyset.surge.sh/"
            />
          </div>
        </Window>
        <Window
          id="Video"
          kind="title"
          windowtitle="Set Preview Video"
          width="100vh"
          margin="10px"
          overflow="hidden"
        >
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={require('../assets/SetPreview.mp4')}
              type="video/mp4"
            />
          </video>
        </Window>
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default PortfolioProjectScreen
