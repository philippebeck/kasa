import "./host.css";

/**
 * ? HOST
 * * A component for displaying host information, including name & picture.
 *
 * @param {Object} props - the properties for the component
 * @param {string} props.name - the full name of the host
 * @param {string} props.picture - the URL of the host's picture
 * @return {JSX.Element} a figure element containing the host's name & picture
 */
const Host = ({ name, picture }) => {

  const [firstname, lastname] = name.split(" ");

  return (
    <figure className="host">

      <figcaption>
        {firstname}
        <br />
        {lastname}
      </figcaption>

      <img
        src={picture}
        alt={name}
      />

    </figure>
  )
}

export default Host
