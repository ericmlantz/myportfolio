//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo
import Window from '../components/Window'
import OverviewTab from './OverviewTab'
//create the component
const HomeMain = () => {
  //render
  return (
    <>
      <Window
        kind="title"
        width="75%"
        minWidth="666px"
        maxWidth="800px"
        alignItems="center"
        windowtitle={'Hi, my name is...'}
      >
        <OverviewTab />
      </Window>
    </>
  )
}
//make this component available to the app
export default HomeMain
