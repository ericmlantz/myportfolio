//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import HomeMain from './HomeMain'
import Window from '../components/Window'
import OverviewTab from './OverviewTab'
//create the component
const Home = () => {
  //render
  return (
    <>
      <MenuBar title="Home" />
      <div className="main">
        <HomeMain />
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default Home
