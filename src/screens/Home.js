//imported from 3rd party libraries

//imported from this repo
import MenuBar from './MenuBar'

//create the component
const Home = () => {
  //render
  return (
    <div>
      <MenuBar title="Home" />
      <div className="main">Main Area</div>
      <div className="dock">Dock</div>
    </div>
  )
}
//make this component available to the app
export default Home
