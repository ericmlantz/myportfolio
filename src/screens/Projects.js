//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'
//imported from this repo
import Dock from './Dock'
import PageLink from '../components/PageLink'
//create the component
const Projects = () => {
  const navigate = useNavigate()
  //render
  return (
    <>
      <div
        className="main projects-setup"
        onClick={() => navigate('/')}
        style={{ height: '84vh' }}
      >
        <PageLink
          src={require('../assets/projectIcon.png')}
          url="https://www.google.com"
          page="/projects"
          width="125px"
          margin="50px"
        />
      </div>
      <div className="blur">
        <div className="dock">
          <Dock />
        </div>
      </div>
    </>
  )
}
//make this component available to the app
export default Projects
