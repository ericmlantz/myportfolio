//imported from 3rd party libraries

//imported from this repo

//create the component
const WelcomeScreen = ({ handleClick }) => {
  //render
  return (
    <>
      <div className="welcomescreen"></div>
      <section className="presentwelcome">
        Welcome to my portfolio! Please read the tooltips around the page to get
        aquainted with the controls before clicking below to enter the site!
        <br />
        <button className="button-43" onClick={handleClick}>
          Enter Site
        </button>
      </section>
      <section className="presentdock">
        This is the Dock <br />
        <span>Click any of the icons to go to that page</span>
      </section>
      <section className="presentsocial">
        These are links to my <b>GitHub</b> and <b>LinkedIn</b>
      </section>
      <section className="presentmenu">
        Clicking the <b>Eric Icon</b> will always take you to this home screen,
        while the text next to it will tell you what page you are currently on
      </section>
    </>
  )
}
//make this component available to the app
export default WelcomeScreen
