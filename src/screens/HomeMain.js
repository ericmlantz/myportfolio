//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo
import Window from '../components/Window'
import OverviewTab from './OverviewTab'
import TechnicalSkillsTab from './TechnicalSkillsTab'

//create the component
const HomeMain = () => {
  const [openTab, setOpenTab] = useState('Eric Lantz')
  //render
  return (
    <>
      <Window
        kind="tab"
        width="75%"
        minWidth="666px"
        maxWidth="800px"
        alignItems="center"
        tabname1={'Eric Lantz'}
        tabname2={'Technical Skills'}
        setOpenTab={setOpenTab}
        openTab={openTab}
        backgroundColor
      >
        {openTab === 'Eric Lantz' && <OverviewTab />}
        {openTab === 'Technical Skills' && <TechnicalSkillsTab />}
      </Window>
    </>
  )
}
//make this component available to the app
export default HomeMain
