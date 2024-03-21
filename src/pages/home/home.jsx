import Banner from "../../components/banner/banner";
import img from "../../assets/home.webp";
import "./home.css";

const Home = () => {

  return (
    <main>
      <Banner src={img} alt="Banner" title="Chez vous, partout et ailleurs" className="banner" />


    </main>
  )
}

export default Home
