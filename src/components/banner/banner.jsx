import "./banner.css";

/**
 * ? BANNER
 * * Renders a banner component with an image & a title.
 *
 * @param {Object} props - The properties for the banner component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} [props.title=""] - The title to be displayed.
 * @param {string} [props.className=""] - Additional CSS class names for the component.
 * @returns {JSX.Element} The rendered banner component.
 */
const Banner = ({ src, alt, title="", className="" }) => {

  return (
    <header className="banner">

      <img 
        src={src} 
        alt={alt} 
        className={className} 
      />

      <h1>{title}</h1>

    </header>
  )
}

export default Banner
