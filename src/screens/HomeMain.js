//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo
import Window from '../components/Window'
import OverviewTab from './OverviewTab'
//create the component
const HomeMain = () => {
  //render
  return (
    <div>
      <Window kind="title" windowtitle={'Hi, my name is...'}>
        <OverviewTab />
      </Window>
    </div>
  )
}
//make this component available to the app
export default HomeMain
