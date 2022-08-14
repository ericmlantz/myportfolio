//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'
//imported from this repo

//create the component
const PageLink = ({ width, src, onPress, ...otherProps }) => {
  const navigate = useNavigate()
  //render
  return (
    <section>
      <div onPress={onPress}>
        <img
          style={{ width: `${width}`, ...otherProps }}
          src={src}
          alt={`link to ${src}`}
        />
      </div>
    </section>
  )
}
//make this component available to the app
export default PageLink
