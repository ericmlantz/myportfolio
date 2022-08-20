//imported from 3rd party libraries
import { useState } from 'react'
//imported from this repo
import { Navigate } from 'react-router-dom'
import PageLink from '../components/PageLink'
//create the component
const OverviewTab = () => {
  //render
  return (
    <section className="overviewwindow">
      <section className="section1">
        <PageLink
          src={require('../assets/AboutMe.png')}
          width="50%"
          borderRadius="50%"
          borderWidth="8px"
          borderColor="#ffffff"
          borderStyle="solid"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
        />
      </section>
      <section className="section2">
        <section>
          <div style={{ fontSize: '2rem', fontWeight: '500' }}>
            Eric <span style={{ fontWeight: '200' }}>Lantz</span>
          </div>
          <div style={{ lineHeight: 0.8, fontSize: '80%', marginBottom: '7%' }}>
            Software Engineer
          </div>
          <div style={{ fontSize: '75%', fontWeight: '300' }}>
            I'm a software engineer with a passion for automation and
            innovation. I love front-end development and get excited building a
            creative, engaging UI. I have a degree in psychology, so you get the
            best of both worlds with me!
          </div>
        </section>
      </section>
    </section>
  )
}
//make this component available to the app
export default OverviewTab
