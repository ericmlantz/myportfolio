//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo

//create the component
const Tab = ({ tabname, setOpenTab, openTab }) => {
  console.log(openTab)
  //render
  return (
    <a onClick={() => setOpenTab(tabname)}>
      <div className="tab">{tabname}</div>
    </a>
  )
}
//make this component available to the app
export default Tab
