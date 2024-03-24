import data from "../../assets/data.json";

import "./error.css";

const Error = () => {

  return (
    <main id="error">

      <h1>{data.error_title}</h1>
      <p>{data.error_text}</p>
      <a href="/">{data.error_link}</a>

    </main>
  );
}

export default Error
