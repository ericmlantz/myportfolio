//imported from 3rd party libraries
//imported from this repo

//create the component
const PageLink = ({ src, page, onPress, ...otherProps }) => {
  //render
  return (
    <a href={page}>
      <img
        style={{
          margin: '1px 5px',
          aspectRatio: 1 / 1,
          ...otherProps
        }}
        src={src}
        alt={`link to ${src}`}
      />
    </a>
  )
}
//make this component available to the app
export default PageLink
