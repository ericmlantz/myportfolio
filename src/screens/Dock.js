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
        url="https://www.google.com"
        page="/"
      />
      <PageLink
        src={require('../assets/projectIcon.png')}
        url="https://www.google.com"
        page="/projects"
      />
      <PageLink
        src={require('../assets/resumeIcon.png')}
        url="https://www.google.com"
        page="/resume"
      />
    </section>
  )
}
//make this component available to the app
export default Dock
