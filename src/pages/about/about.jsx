import data from "../../assets/data.json";
import img  from "../../assets/about.webp";

import Banner   from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";

import "./about.css";

const About = () => {

  return (
    <main id="about">

      <Banner 
        src={img}
        alt={data.about_alt}
      />

      { data.about.map(({ title, content }) =>

        <Collapse 
          key={title}
          title={title}
          content={content}
        />

      )}
    </main>
  )
}

export default About
