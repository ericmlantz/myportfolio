//imported from 3rd party libraries

//imported from this repo

//create the component
const Tab = ({ tabname }) => {
  //render
  return (
    <a>
      <div className="tab">
        <span className="tabspan">{tabname}</span>
      </div>
    </a>
  )
}
//make this component available to the app
export default Tab
