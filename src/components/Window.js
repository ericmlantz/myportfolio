//imported from 3rd party libraries

//imported from this repo
import IconLink from './IconLink'
import Tab from './Tab'

//create the component
const Window = ({
  children,
  color,
  extras,
  iconname,
  id,
  kind,
  openTab,
  setOpenTab,
  tabname1,
  tabname2,
  tabname3,
  url,
  windowtitle,
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
              <Tab
                id="1"
                openTab={openTab}
                setOpenTab={setOpenTab}
                tabname={tabname1}
                backgroundColor={openTab === tabname1 ? '#dbdcde' : ''}
                color={openTab === tabname1 ? '#454545' : '#666768'}
              />
              <Tab
                id="2"
                openTab={openTab}
                setOpenTab={setOpenTab}
                tabname={tabname2}
                backgroundColor={openTab === tabname2 ? '#dbdcde' : ''}
                color={openTab === tabname2 ? '#454545' : '#666768'}
              />
            </section>
          )}
          {kind === 'title' && (
            <section className="windowbartitle">{windowtitle}</section>
          )}
        </>
        {extras === 'icon' && (
          <section className="extrawindowbaroptions">
            <IconLink name={iconname} color={color} url={url} />
          </section>
        )}
      </section>
      <section className="windowcontent">{children}</section>
    </div>
  )
}
//make this component available to the app
export default Window
