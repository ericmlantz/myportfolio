//imported from 3rd party libraries
import { Link, useNavigate } from 'react-router-dom'
//imported from this repo

//create the component
const PageLink = ({
  linktype,
  src,
  internal,
  external,
  page,
  ...otherProps
}) => {
  const navigate = useNavigate()

  const handleClickPage = (event) => {
    event.stopPropagation()
    navigate(page)
  }

  const handleClickUrl = (event) => {
    event.stopPropagation()
    window.open(`${page}`, '_blank')
  }
  //render
  return (
    <>
      {linktype === 'internal' && (
        <img
          linktype={internal}
          page={page}
          onClick={handleClickPage}
          style={{
            margin: '1px 5px',
            aspectRatio: 1 / 1,
            ...otherProps
          }}
          src={src}
          alt={`link to ${page}`}
        />
      )}
      {linktype === 'external' && (
        <img
          linktype={external}
          page={page}
          onClick={(event) => handleClickUrl(event)}
          style={{
            margin: '1px 5px',
            aspectRatio: 1 / 1,
            ...otherProps
          }}
          src={src}
          alt={`link to ${page}`}
        />
      )}
      {!linktype && (
        <img
          onClick={(event) => event.stopPropagation()}
          style={{
            margin: '1px 5px',
            aspectRatio: 1 / 1,
            ...otherProps
          }}
          src={src}
          alt={`link to ${page}`}
        />
      )}
    </>
  )
}
//make this component available to the app
export default PageLink
