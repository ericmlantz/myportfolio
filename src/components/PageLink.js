//imported from 3rd party libraries

//imported from this repo

//create the component
const PageLink = ({ width, src, url, ...otherProps }) => {
  //render
  return (
    <section>
      <a href={url} alt={`${url}`}>
        <img
          style={{ width: `${width}`, ...otherProps }}
          src={src}
          alt={`link to ${src}`}
        />
      </a>
    </section>
  )
}
//make this component available to the app
export default PageLink
