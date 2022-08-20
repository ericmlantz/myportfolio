//imported from 3rd party libraries

//imported from this repo

//create the component
const Tab = ({ tabname, setOpenTab, ...otherProps }) => {
  //render
  return (
    <a onClick={() => setOpenTab(tabname)} style={{ ...otherProps }}>
      <div className="tab">{tabname}</div>
    </a>
  )
}
//make this component available to the app
export default Tab
