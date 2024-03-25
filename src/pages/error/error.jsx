import data from "../../assets/data.json";
import "./error.css";

const Error = () => {

  return (
    <main id="error">

      <h1>{data.code}</h1>
      <p>{data.error}</p>
      <a href="/">{data.link}</a>

    </main>
  );
}

export default Error
