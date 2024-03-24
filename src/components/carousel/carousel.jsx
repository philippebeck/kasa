import { useState } from "react";

import data from "../../assets/data.json";

import "./carousel.css";

/**
 * ? CAROUSEL
 * * Carousel component that displays a set of pictures in a carousel format.
 *
 * @param {Object} props - The properties for the Carousel component.
 * @param {array} props.pictures - Array of picture URLs to be displayed in the carousel
 * @param {string} props.alt - Alternative text for the displayed images
 * @return {JSX} The JSX element representing the Carousel component
 */
const Carousel = ({ pictures, alt }) => {

  let [index, setIndex] = useState(0)

  const goPrevious = () => {
    setIndex((index) => 
      (index - 1 + pictures.length) % pictures.length)
  }

  const goNext = () => {
    setIndex((index) => 
      (index + 1) % pictures.length)
  }

  return (
    <figure className="carousel">

      <img
        src={pictures[index]}
        alt={`${alt} (${data.carousel} ${index + 1})`}
      />

      { pictures.length > 1 && (

        <nav>
          <i
            className="fa-solid fa-chevron-left"
            onClick={goPrevious}
          ></i>

          <i
            className="fa-solid fa-chevron-right"
            onClick={goNext}
          ></i>

          <b>{index + 1}/{pictures.length}</b>
        </nav>

      )}

    </figure>
  )
}

export default Carousel
