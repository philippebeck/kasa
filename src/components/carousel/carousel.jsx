import "./carousel.css";

const Carousel = ({ src, alt }) => {

  return (
    <figure className="carousel">
      <img src={src} alt={alt} />

      <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
      <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>

      <b>1/5</b>
    </figure>
  )
}

export default Carousel
