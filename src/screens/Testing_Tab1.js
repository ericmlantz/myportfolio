//imported from 3rd party libraries
import { useState } from 'react'

import '../styles/Testing.css'

//create the component
const Testing_Tab1 = () => {
  const [openTab, setOpenTab] = useState('Tab 1')
  //render
  return (
    <>
      <div class="container">
        <div class="grid">
          <div class="cell" id="1">
            <h1>Dropdown</h1>
            <select class="dropdown" name="language" id="language">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="c++">C++</option>
              <option value="java">Java</option>
            </select>
          </div>
          <div class="cell" id="2">
            2
          </div>
          <div class="cell" id="3">
            3
          </div>
          <div class="cell" id="4">
            4
          </div>
          <div class="cell" id="5">
            5
          </div>
          <div class="cell" id="6">
            6
          </div>
          <div class="cell" id="7">
            7
          </div>
          <div class="cell" id="8">
            8
          </div>
          <div class="cell" id="9">
            9
          </div>
        </div>
      </div>
    </>
  )
}
export default Testing_Tab1
