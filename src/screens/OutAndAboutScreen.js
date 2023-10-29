//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const OutAndAboutScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Out and About 5" />
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
              appName="Out and About 5"
              appDescription={
                'Explore your world! Out and About 5 is a scavenger hunt game that challenges users to complete 5 tasks located at 5 new places within 5 miles of their location. It was made using a P.E.R.N Stack (PostgreSQL, Express, React, Node) as well as OpenStreetMap API and React Leaflet. This was a group project wtih myself and 2 other developers and was completed in one week during a Software Engineering Immsersive Course from General Assembly.'
              }
              appTechUsed={[
                'JavaScript',
                'HTML',
                'CSS',
                'Node.js',
                'PostgreSQL',
                'Express',
                'Heroku',
                'React Leaflet',
                'OpenStreetMap Overpass API',
                'Heroku'
              ]}
              appGithub="https://github.com/LawrenceOL/out-n-about-5-front-end#out-n-about-5-front-end"
              // appDeployed="https://out-n-about-5-front-end.herokuapp.com/"
            />
            {/* <div className="slownote">
              **Deployed link is slow to load due to hosting site. Please be
              patient!**
            </div> */}
          </div>
        </Window>
        <Window
          id="Video"
          kind="title"
          windowtitle="Out and About 5 Preview Video"
          width="100vh"
          margin="10px"
          overflow="hidden"
        >
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={require('../assets/OaA5Preview.mp4')}
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
export default OutAndAboutScreen
