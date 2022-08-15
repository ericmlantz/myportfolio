//imported from 3rd party libraries

//imported from this repo
import Tab from './Tab'

//create the component
const Window = ({
  kind,
  children,
  tabname1,
  tabname2,
  tabname3,
  windowtitle
}) => {
  //render
  return (
    <div className="window">
      <section className="windowmenubar">
        <section className="menuwidgets">
          <div className="windowdots red" style={{ marginLeft: '10px' }}></div>
          <div className="windowdots orange"></div>
          <div className="windowdots green"></div>
        </section>
        <>
          {kind === 'tab' && (
            <section className="tabcontainer">
              <Tab tabname={tabname1} />
              <Tab tabname={tabname2} />
              <Tab tabname={tabname3} />
            </section>
          )}
          {kind === 'title' && (
            <section className="windowbartitle">{windowtitle}</section>
          )}
        </>
      </section>
      <>{children}</>
    </div>
  )
}
//make this component available to the app
export default Window
