//imported from 3rd party libraries

//imported from this repo
import MenuBar from './MenuBar'
import Dock from './Dock'
import Window from '../components/Window'
//create the component
const Resume = () => {
  //render
  return (
    <>
      <MenuBar title="Resume" />
      <div className="main">
        <Window
          kind="tab"
          tabname1={'Overview'}
          tabname2={'Contact'}
          tabname3={'Alissa!!!!'}
        />
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default Resume
