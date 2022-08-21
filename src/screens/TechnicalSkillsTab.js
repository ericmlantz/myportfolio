//imported from 3rd party libraries

//imported from this repo

import PageLink from '../components/PageLink'
//create the component
const TechnicalSkillsTab = () => {
  //render
  return (
    <div className="techskills">
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">JavaScript</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.python.org/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Python</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">HTML5</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://reactjs.org/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">React</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://reactnative.dev/"
          src={require('../assets/ReactNativeIcon.png')}
          width="26px"
          height="36px"
        />
        <div className="techskillsnames">React Native</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://vuejs.org/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Vue</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.w3.org/TR/CSS/#css"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">CSS3</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://getbootstrap.com/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Bootstrap</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://redux.js.org/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Redux</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://nodejs.org/en/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">NodeJS</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://expressjs.com/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Express</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.mongodb.com/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">MongoDB</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.postgresql.org/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">PostgreSQL</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.heroku.com/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Heroku</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.djangoproject.com/"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Django</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://git-scm.com/"
          src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Git</div>
      </section>

      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.adobe.com/us/products/photoshop.html"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Adobe Photoshop</div>
      </section>
      <section className="skillitem">
        <PageLink
          linktype={'external'}
          page="https://www.adobe.com/us/products/illustrator.html"
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg"
          width="36px"
          height="36px"
        />
        <div className="techskillsnames">Adobe Illustrator</div>
      </section>
    </div>
  )
}
//make this component available to the app
export default TechnicalSkillsTab
