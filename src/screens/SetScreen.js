//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'

//create the component
const SetScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Set" />
      <div className="main">
        <Window title />
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default SetScreen
