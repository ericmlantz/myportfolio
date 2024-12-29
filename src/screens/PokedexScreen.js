//imported from 3rd party libraries

//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import Window from '../components/Window'
import ProjectInfo from '../components/ProjectInfo'

//create the component
const PokedexScreen = () => {
  //render
  return (
    <>
      <MenuBar title="Pokédex" />
      <div className="main">
        <Window
          id="Information"
          kind="title"
          windowtitle="AppOverview"
          width="70vh"
          marginLeft="10px"
        >
          <div style={{ height: '62vh', overflow: 'scroll' }}>
            <ProjectInfo
              appName="Pokédex"
              padding="5%"
              appDescription="The Pokedex application is an interactive platform for exploring and managing Pokémon information. Users can search by type, view detailed profiles with stats, moves, and types, and even add new Pokémon to the database with real-time dropdown menus and optional image uploads to an AWS S3 bucket. With a sleek design, intuitive navigation, and features like type-filtered search and move-specific pop-ups, the app offers a rich and immersive user experience. Backed by a robust RESTful API, it ensures seamless data creation, retrieval, and updates."
              appTechUsed={[
                'JavaScript using React',
                'Node.js',
                'Express',
                'Amazon RDS',
                'Amazon EC2',
                'Amazon S3',
                'HTML',
                'CSS',
              ]}
              appGithub="https://github.com/ericmlantz/pokedex"
              appDeployed="https://pokedex.ericlan.tz"
            />
          </div>
        </Window>
        <Window
          id="Video"
          kind="title"
          windowtitle="Pokédex Preview Video"
          width="100vh"
          margin="10px"
          overflow="hidden"
        >
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={require('../assets/videos/Pokedex_Demo_Video.mp4')}
              type="video/mp4"
            />
          </video>
        </Window>
      </div>
      <div className="dock">
        <Dock />
      </div>
    </>
  )
}
//make this component available to the app
export default PokedexScreen
