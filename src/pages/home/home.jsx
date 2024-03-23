import { Link } from "react-router-dom";
import housing  from "../../assets/housing.json";
import img      from "../../assets/home.webp";

import Banner from "../../components/banner/banner";
import Card   from "../../components/card/card";

import "./home.css";

/**
 * ? HOME
 * * Renders the Home component with a banner & a list of housing cards.
 *
 * @return {JSX.Element} The main section containing the banner & housing cards.
 */
const Home = () => {

  return (
    <main id="home">
      <Banner 
        src={img} 
        alt="Des falaises en bord de mer" 
        title="Chez vous, partout et ailleurs" 
        className="filter" 
      />

      <ul>
        { housing.map(({ cover, title, id }) =>
          <li key={id}>

            <Link to={`/housing/${id}`}>
              <Card src={cover} alt={title} title={title} />
            </Link>

          </li>
        )}
      </ul>
    </main>
  )
}

export default Home
