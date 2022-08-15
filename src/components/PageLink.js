//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'

//imported from this repo

//create the component
const PageLink = ({ src, page, ...otherProps }) => {
  const navigate = useNavigate()
  const handleClick = (event) => {
    event.preventDefault()
    navigate(page)
  }
  //render
  return (
    <img
      onClick={handleClick}
      style={{
        margin: '1px 5px',
        aspectRatio: 1 / 1,
        ...otherProps
      }}
      src={src}
      alt={`link to ${src}`}
    />
    //{' '}
  )
}
//make this component available to the app
export default PageLink
