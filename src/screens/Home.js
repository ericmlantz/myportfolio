//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'

//create the component
const Home = () => {
  //render
  return (
    <>
      <MenuBar title="Home" />
      <div className="main">Main Area</div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default Home
