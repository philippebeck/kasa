import { useParams } from "react-router-dom";
import housing from "../../assets/housing.json";
import Error from "../error/error";
import Carousel from "../../components/carousel/carousel";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/host/host";
import Rating from "../../components/rating/rating";
import "./housing.css";

const Housing = () => {
  const { id } = useParams();
  const card   = housing.find((card) => card.id === id);

  if (!card) return <Error />

  return (
    <main id="housing">
      <Carousel pictures={card.pictures} alt={card.title} />

      <h1>{card.title}</h1>
      <p>{card.location}</p>

      <ul>
        { card.tags.map((tag) =>
          <li key={tag}>
            <label>{tag}</label>
          </li>
        )}
      </ul>

      <Rating rating={card.rating} />
      <Host name={card.host.name} picture={card.host.picture} />

      <Collapse title="Description" content={card.description} />
      <Collapse title="Équipments" content={card.equipments} />
    </main>
  )
}

export default Housing
