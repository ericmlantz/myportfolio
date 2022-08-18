//imported from 3rd party libraries

//imported from this repo

//create the component
const ProjectInfo = ({
  appName,
  appDescription,
  appTechUsed = [],
  appGithub,
  appDeployed,
  appTrello
}) => {
  //render
  return (
    <div style={{ overflow: 'scroll' }}>
      <h3>{appName}</h3>
      {appDescription}
      <div className="projectinfo">
        <p className="projectinfosectiontitle">Technologies Used</p>
        <div className="techusedlist">
          <ul>
            {appTechUsed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="projectinfosectiontitle">Links</p>
        The project's GitHub can be found <a href={appGithub}>HERE</a>
        <br />
        The deployed app can be accessed <a href={appDeployed}>HERE</a>
      </div>
    </div>
  )
}
//make this component available to the app
export default ProjectInfo
