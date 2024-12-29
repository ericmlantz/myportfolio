//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'
//imported from this repo
import Dock from './Dock'
import PageLink from '../components/PageLink'
//create the component

//variables
let emptyApps = require('../assets/glassPane.png')
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
            linktype="internal"
            page="/project/dinr"
            src={require('../assets/dinrLogoIcon.png')}
            width={appWidth}
            titletext={'Dinr'}
          />
        </div>
        <div className="projectapp">
          <PageLink
            linktype="internal"
            page="/project/set"
            src={require('../assets/setLogoIcon.png')}
            width={appWidth}
            titletext={'SET'}
          />
        </div>
        <div className="projectapp">
          <PageLink
            linktype="internal"
            page="/project/outandabout"
            src={require('../assets/OutAndAboutIcon.png')}
            width={appWidth}
            titletext={'Out and About 5'}
          />
        </div>
        <div className="projectapp">
          <PageLink
            src={require('../assets/portfolioIcon.png')}
            linktype="external"
            page="https://github.com/ericmlantz/myportfolio#im-eric-lantz-and-this-is-my-portfolio"
            width={appWidth}
            titletext={'My Portfolio'}
          />
        </div>
        <div className="projectapp">
          <PageLink
            src={require('../assets/Pokedex_icon.png')}
            linktype="internal"
            page="/project/pokedex"
            width={appWidth}
            titletext={'Pokédex'}
          />
        </div>
        {[...Array(7)].map((app, index) => (
          <div className="projectapp" key={index}>
            <PageLink cursor="auto" src={emptyApps} width={appWidth} />
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
