//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'
//imported from this repo
import Dock from './Dock'
import PageLink from '../components/PageLink'
//create the component

//variables
let emptyApps = require('../assets/blankAppIcon.png')
let appWidth = '60%'

const Projects = () => {
  const navigate = useNavigate()

  //render
  return (
    <>
      <div
        className="projects-setup"
        onClick={() => navigate('/')}
        style={{ height: '84vh' }}
      >
        <div className="projectapp">
          <PageLink
            linktype="external"
            page="https://deployment.d1ha25xg2gtgyh.amplifyapp.com/"
            src={require('../assets/dinrLogoIcon.png')}
            width={appWidth}
          />
        </div>
        <div className="projectapp">
          <PageLink
            linktype="external"
            page="https://www.google.com/search?q=set+card+game"
            src={require('../assets/projectIcon.png')}
            width={appWidth}
          />
        </div>
        <div className="projectapp">
          <PageLink
            page="https://www.google.com/search?q=react+mobile+app"
            src={require('../assets/projectIcon.png')}
            width={appWidth}
          />
        </div>
        {[...Array(9)].map((app, index) => (
          <div className="projectapp" key={index}>
            <PageLink src={emptyApps} width={appWidth} />
          </div>
        ))}
      </div>
      <div className="blur">
        <div className="dock">
          <Dock />
        </div>
      </div>
    </>
  )
}
//make this component available to the app
export default Projects
