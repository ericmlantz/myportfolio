//imported from 3rd party libraries

//imported from this repo

//create the component
const IconLink = ({ name, size, url, ...otherProps }) => {
  //render
  return (
    <a href={url} alt={`${url}`} target="_blank" rel="noreferrer" download>
      <i
        className={`bi bi-${name}`}
        style={{ fontSize: `${size}`, color: `white`, ...otherProps }}
      ></i>
    </a>
  )
}
//make this component available to the app
export default IconLink
