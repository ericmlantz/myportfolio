//imported from 3rd party libraries
import { useState } from 'react'

//imported from this repo
import TestingTab1 from './Testing_Tab1'
import Window from '../components/Window'
import TechnicalSkillsTab from './TechnicalSkillsTab'

//create the component
const Testing = () => {
  const [openTab, setOpenTab] = useState('Tab 1')
  //render
  return (
    <>
      <Window
        kind="tab"
        width="75%"
        minWidth="666px"
        maxWidth="800px"
        alignItems="center"
        tabname1={'Tab 1'}
        tabname2={'Tab 2'}
        setOpenTab={setOpenTab}
        openTab={openTab}
        backgroundColor
      >
        {openTab === 'Tab 1' && <TestingTab1 />}
        {openTab === 'Tab 2' && <TechnicalSkillsTab />}
      </Window>
    </>
  )
}
//make this component available to the app
export default Testing
