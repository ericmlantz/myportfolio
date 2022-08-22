//imported from 3rd party libraries
import { useLocation } from 'react-router-dom'
//imported from this repo
import PageLink from '../components/PageLink'

let dockitemwidth = '89px'
//create the component
const Dock = () => {
  const projectLocation = useLocation()
  //render
  return (
    <section className="dockcontainer">
      <PageLink
        src={require('../assets/ericIcon.png')}
        linktype="internal"
        page="/"
        width={dockitemwidth}
        height="100%"
      />
      <PageLink
        src={require('../assets/projectIcon.png')}
        linktype="internal"
        page="/projects"
        width={dockitemwidth}
        height="100%"
      />
      <PageLink
        src={require('../assets/resumeIcon.png')}
        linktype="internal"
        page="/resume"
        width={dockitemwidth}
        height="100%"
      />
      <PageLink
        src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png'
        }
        linktype="external"
        page="https://www.linkedin.com/in/eric-lantz/"
        width={dockitemwidth}
        height="100%"
      />
      <PageLink
        src={require('../assets/githubIcon.png')}
        linktype="external"
        page="https://github.com/ericmlantz"
        width={dockitemwidth}
        height="100%"
      />
      <PageLink
        src={require('../assets/emailIcon.png')}
        linktype="external"
        page="mailto:ericmlantz@gmail.com"
        width={dockitemwidth}
        height="100%"
      />
      {projectLocation.pathname === '/project/dinr' && (
        <PageLink
          width={dockitemwidth}
          height="100%"
          src={require('../assets/dinrLogoIcon.png')}
        />
      )}
      {projectLocation.pathname === '/project/set' && (
        <PageLink
          width={dockitemwidth}
          height="100%"
          src={require('../assets/setLogoIcon.png')}
        />
      )}
      {projectLocation.pathname === '/project/outandabout' && (
        <PageLink
          className="pagelink"
          width={dockitemwidth}
          height="100%"
          src={require('../assets/OutAndAboutIcon.png')}
        />
      )}
    </section>
  )
}
//make this component available to the app
export default Dock
