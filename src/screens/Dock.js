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
        width={'50px'}
        url="https://www.google.com"
      />
    </div>
  )
}
//make this component available to the app
export default Dock
