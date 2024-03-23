import "./rating.css";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {

    if (i < rating) {
      stars.push(<i className="fa-solid fa-star primary" key={i}></i>)

    } else {
      stars.push(<i className="fa-solid fa-star secondary" key={i}></i>)
    }
  }

  return (
    <figure className="rating">{stars}</figure>
  )
}

export default Rating
