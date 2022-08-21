//imported from 3rd party libraries

//imported from this repo

//create the component
const ProjectInfo = ({
  appName,
  appDescription,
  appTechUsed = [],
  appGithub,
  appDeployed,
  appTrello,
  ...otherProps
}) => {
  //render
  return (
    <div style={{ ...otherProps }}>
      <h3>{appName}</h3>
      <div className="techusedlist">{appDescription}</div>
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
        The project's GitHub can be found{' '}
        <a href={appGithub} target="_blank">
          here.
        </a>
        <br />
        The deployed app can be accessed{' '}
        <a href={appDeployed} target="_blank">
          here.
        </a>
      </div>
    </div>
  )
}
//make this component available to the app
export default ProjectInfo
