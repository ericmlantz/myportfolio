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
          width="75%"
          height="100%"
          kind="title"
          windowtitle="Resume"
          extras="icon"
          iconname="download"
          color="black"
          overflow="hidden"
          url="https://drive.google.com/uc?id=1oPSYg-3Ed1V2P7i8fKGhzbn4eb_smUWv&export=download"
        >
          <div className="resumeiframecontainer">
            <iframe
              title="resumeiframe"
              className="resumeiframe"
              src="https://drive.google.com/file/d/1oPSYg-3Ed1V2P7i8fKGhzbn4eb_smUWv/preview"
              width="100%"
              height="75%"
            ></iframe>
          </div>
        </Window>
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default Resume
