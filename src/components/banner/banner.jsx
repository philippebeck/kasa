import "./banner.css";

const Banner = ({ src, alt, title="" }) => {

  return (
    <header>
      <img src={src} alt={alt} />

      <h1>{title}</h1>
    </header>
  )
}

export default Banner
