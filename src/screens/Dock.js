//imported from 3rd party libraries

//imported from this repo
import PageLink from '../components/PageLink'

//create the component
const Dock = () => {
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
    </section>
  )
}
//make this component available to the app
export default Dock
