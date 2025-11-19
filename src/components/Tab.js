//imported from 3rd party libraries

//imported from this repo

//create the component
const Tab = ({ tabname, setOpenTab, ...otherProps }) => {
  //render
  return (
    <button
      onClick={() => setOpenTab(tabname)}
      style={{ ...otherProps }}
      className="tab"
    >
      {tabname}
    </button>
  );
}
//make this component available to the app
export default Tab
