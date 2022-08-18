//imported from 3rd party libraries
import { useLocation } from 'react-router-dom'
//imported from this repo
import PageLink from '../components/PageLink'

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
      />
      <PageLink
        src={require('../assets/projectIcon.png')}
        linktype="internal"
        page="/projects"
      />
      <PageLink
        src={require('../assets/resumeIcon.png')}
        linktype="internal"
        page="/resume"
      />
      {projectLocation.pathname === '/project/dinr' && (
        <PageLink src={require('../assets/dinrLogoIcon.png')} />
      )}
      {projectLocation.pathname === '/project/set' && (
        <PageLink src={require('../assets/setLogoIcon.png')} />
      )}
    </section>
  )
}
//make this component available to the app
export default Dock
