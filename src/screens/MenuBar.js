//imported from 3rd party libraries

//imported from this repo
import IconLink from '../components/IconLink'
import PageLink from '../components/PageLink'

//create the component
const MenuBar = ({ title }) => {
  //render
  return (
    <div className="menubar">
      <section className="menuitems">
        <PageLink
          className="siteicon"
          src={require('../assets/Eric Memoji.png')}
          width={'25px'}
          url={'https://www.google.com'}
          marginLeft=".5rem"
        />
        <div className="filemenu">{title}</div>
      </section>
      <section className="menuwidgets">
        <IconLink
          name="github"
          url="https://github.com/ericmlantz"
          size="1.5rem"
          margin="8px"
        />
        <IconLink
          name="linkedin"
          url="https://www.linkedin.com/in/eric-lantz/"
          size="1.5rem"
          margin="8px"
        />
      </section>
    </div>
  )
}
//make this component available to the app
export default MenuBar
