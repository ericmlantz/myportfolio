//imported from 3rd party libraries

//imported from this repo
import IconLink from './IconLink'
import Tab from './Tab'

//create the component
const Window = ({
  kind,
  extras,
  children,
  tabname1,
  tabname2,
  tabname3,
  windowtitle,
  iconname,
  color,
  ...otherProps
}) => {
  //render
  return (
    <div className="window" style={{ ...otherProps }}>
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
        <section className="extrawindowbaroptions">
          {extras === 'icon' && <IconLink name={iconname} color={color} />}
        </section>
      </section>
      <>{children}</>
    </div>
  )
}
//make this component available to the app
export default Window
