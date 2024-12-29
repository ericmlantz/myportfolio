//imported from 3rd party libraries
import { useLocation } from 'react-router-dom'
//imported from this repo
import PageLink from '../components/PageLink'

let dockitemwidth = '10vh'
//create the component
const Dock = () => {
  const projectLocation = useLocation()
  //render
  return (
    <section className="dockcontainer">
      <div className="docksection">
        <PageLink
          linktype="internal"
          page="/"
          titletext={'Home'}
          src={require('../assets/ericIcon.png')}
        />
      </div>
      <div className="docksection">
        <PageLink
          height="100%"
          linktype="internal"
          page="/projects"
          src={require('../assets/projectIcon.png')}
          titletext={'Projects'}
          width={dockitemwidth}
        />
      </div>
      <div className="docksection">
        <PageLink
          height="100%"
          linktype="internal"
          page="/resume"
          src={require('../assets/resumeIcon.png')}
          titletext={'Resume'}
          width={dockitemwidth}
        />
      </div>
      <div className="docksection">
        <PageLink
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png'
          }
          linktype="external"
          page="https://www.linkedin.com/in/eric-lantz/"
          width={dockitemwidth}
          height="100%"
          titletext={'LinkedIn'}
        />
      </div>
      <div className="docksection">
        <PageLink
          src={require('../assets/githubIcon.png')}
          linktype="external"
          page="https://github.com/ericmlantz"
          width={dockitemwidth}
          height="100%"
          titletext={'GitHub'}
        />
      </div>
      <div className="docksection">
        <PageLink
          src={require('../assets/emailIcon.png')}
          linktype="external"
          page="mailto:ericmlantz@gmail.com"
          width={dockitemwidth}
          height="100%"
          titletext={'Email'}
        />
      </div>
      {projectLocation.pathname === '/project/pokedex' && (
        <div className="docksection">
          <PageLink
            width={dockitemwidth}
            height="100%"
            src={require('../assets/Pokedex_icon.png')}
            titletext={'Pokédex'}
          />
        </div>
      )}
      {projectLocation.pathname === '/project/dinr' && (
        <div className="docksection">
          <PageLink
            width={dockitemwidth}
            height="100%"
            src={require('../assets/dinrLogoIcon.png')}
            titletext={'Dinr'}
          />
        </div>
      )}
      {projectLocation.pathname === '/project/set' && (
        <div className="docksection">
          <PageLink
            width={dockitemwidth}
            height="100%"
            src={require('../assets/setLogoIcon.png')}
            titletext={'SET'}
          />
        </div>
      )}
      {projectLocation.pathname === '/project/outandabout' && (
        <div className="docksection">
          <PageLink
            className="pagelink"
            width={dockitemwidth}
            height="100%"
            src={require('../assets/OutAndAboutIcon.png')}
            titletext={'Out & About'}
          />
        </div>
      )}
    </section>
  )
}
//make this component available to the app
export default Dock
