//imported from 3rd party libraries
import { Routes, Route } from 'react-router-dom'
//imported from this repo
import './styles/App.css'
import Home from './screens/Home'
import Resume from './screens/Resume'
import Projects from './screens/Projects'
import DinrScreen from './screens/DinrScreen'
import SetScreen from './screens/SetScreen'
import OutAndAboutScreen from './screens/OutAndAboutScreen'
import Testing from './screens/Testing'

//display the component
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project/dinr" element={<DinrScreen />} />
        <Route path="/project/set" element={<SetScreen />} />
        <Route path="/project/outandabout" element={<OutAndAboutScreen />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </div>
  )
}
