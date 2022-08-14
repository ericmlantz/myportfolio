//imported from 3rd party libraries

//imported from this repo
import PageLink from '../components/PageLink'
//create the component
const Dock = () => {
  //render
  return (
    <div className="dockcontainer">
      <PageLink
        className="homeicon"
        src={require('../assets/Eric Memoji.png')}
        width={'80px'}
        url="https://www.google.com"
      />
      <PageLink
        className="projecticon"
        src={require('../assets/projectIcon.png')}
        width={'80px'}
        url="https://www.google.com"
      />
      <PageLink
        className="resumeicon"
        src={require('../assets/resumeicon.png')}
        width={'80px'}
        url="https://www.google.com"
      />
    </div>
  )
}
//make this component available to the app
export default Dock
