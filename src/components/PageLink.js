//imported from 3rd party libraries
//imported from this repo

//create the component
const PageLink = ({ width, src, onPress, ...otherProps }) => {
  //render
  return (
    <section>
      <div onPress={onPress}>
        <img
          style={{
            width: `${width}`,
            marginLeft: '1rem',
            ...otherProps
          }}
          src={src}
          alt={`link to ${src}`}
        />
      </div>
    </section>
  )
}
//make this component available to the app
export default PageLink
