import "./card.css";

/**
 * ? CARD
 * * Renders a card component with an image & a title.
 *
 * @param {Object} props - The properties for the card component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} props.title - The title of the card.
 * @return {JSX.Element} The rendered card component.
 */
const Card = ({ src, alt, title }) => {

  return (
    <figure className="card">
      <img src={src} alt={alt} />

      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default Card
