//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const DinrScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Dinr" />
      <div className="main">
        <Window
          id="Information"
          kind="title"
          windowtitle="AppOverview"
          width="70vh"
          marginLeft="10px"
          // position="relative"
          // bottom="-10px"
          // left="50px"
        >
          <div style={{ height: '62vh', overflow: 'scroll' }}>
            <ProjectInfo
              appName="Dinr"
              padding="5%"
              appDescription="A matching, swipe style application for restaurant-goers, developed as a full-stack, M.E.R.N, (MongoDB, Express, React, Node), application during the second unit in my Software Engineering Immersive by General Assembly."
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
              appGithub="https://github.com/ericmlantz/frontend#dinr---frontend"
              // appDeployed="https://deployment.d1ha25xg2gtgyh.amplifyapp.com/"
            />
            {/* <div className="slownote">
              **Registering/Logging In on deployed link is slow to load due to
              hosting site. Please be patient!**
            </div>  */}
          </div>
        </Window>
        <Window
          id="Video"
          kind="title"
          windowtitle="Dinr Preview Video"
          width="100vh"
          margin="10px"
          overflow="hidden"
        >
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={require('../assets/DinrPreview.mp4')}
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
export default DinrScreen
