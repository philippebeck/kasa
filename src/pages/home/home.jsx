import { Link } from "react-router-dom";

import data from "../../assets/data.json";
import img  from "../../assets/home.webp";

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
        alt={data.home}
        title={data.title}
      />

      <ul>
        { data.housing.map(({ cover, title, id }) =>

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
