//imported from 3rd party libraries
import { useEffect } from 'react'
//imported from this repo
import Dock from './Dock'
import MenuBar from './MenuBar'
import HomeMain from './HomeMain'
import WelcomeScreen from './WelcomeScreen'
//create the component
const Home = ({ welcome, setWelcome, count, setCount }) => {
  useEffect(() => {
    if (count < 1) {
      setWelcome(true)
      setCount(1)
    }
  }, [])

  const handleClick = () => {
    setWelcome(false)
  }
  //render
  return (
    <>
      {welcome === true && <WelcomeScreen handleClick={handleClick} />}
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
