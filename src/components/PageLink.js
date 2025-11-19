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
  titlecolor,
  titletext,
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
          alt={`link to ${page}`}
          className="pagelink"
          linktype={internal}
          onClick={handleClickPage}
          page={page}
          src={src}
          style={{ ...otherProps }}
          titletext={titletext}
        />
      )}
      {linktype === 'external' && (
        <img
          alt={`link to ${page}`}
          className="pagelink"
          linktype={external}
          onClick={(event) => handleClickUrl(event)}
          page={page}
          src={src}
          style={{ ...otherProps }}
          titletext={titletext}
        />
      )}
      {!linktype && (
        <img
          alt={`link to ${page}`}
          onClick={(event) => event.stopPropagation()}
          src={src}
          style={{ ...otherProps }}
          titletext={titletext}
          className="pagelink"
        />
      )}
      {titletext && <p className="pagelinktitle">{titletext}</p>}
    </>
  )
}
//make this component available to the app
export default PageLink

