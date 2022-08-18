//imported from 3rd party libraries
import { useNavigate } from 'react-router-dom'
//imported from this repo

//create the component
const PageLink = ({
  external,
  internal,
  linktype,
  page,
  src,
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
          onClick={handleClickPage}
          page={page}
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
          onClick={(event) => handleClickUrl(event)}
          page={page}
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
