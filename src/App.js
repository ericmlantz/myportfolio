//imported from 3rd party libraries
import { Routes, Route } from 'react-router-dom'

//imported from this repo
import './styles/App.css'
import Home from './screens/Home'
import Resume from './screens/Resume'

//create the component
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}
