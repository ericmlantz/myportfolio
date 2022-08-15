//imported from 3rd party libraries
//imported from this repo

//create the component
const ImageIcon = ({ src, ...otherProps }) => {
  //render
  return (
    <img
      style={{
        margin: 'auto',
        aspectRatio: 1 / 1,
        ...otherProps
      }}
      src={src}
      alt={`link to ${src}`}
    />
    // </a>
  )
}
//make this component available to the app
export default ImageIcon
