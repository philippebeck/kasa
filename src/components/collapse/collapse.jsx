import { useState } from "react";
import data from "../../assets/data.json";
import "./collapse.css";

/**
 * ? COLLAPSE
 * * Renders a collapsible section with a title and content.
 *
 * @param {Object} props - The properties for the collapsible section.
 * @param {string} props.title - The title of the collapsible section.
 * @param {string} props.content - The content to be displayed when the section is expanded.
 * @return {JSX.Element} - The rendered collapsible section component.
 */
const Collapse = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className="collapse">

      <header onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i 
          className={`fa-solid ${ isOpen ? 'fa-chevron-down rotate' : 'fa-chevron-up' } fa-lg`}
        ></i>
      </header>

      { isOpen && (title === data.list ? (
        <ul>
          { content.map((item, index) => (
            <li 
              key={index} 
              className={`${ isOpen ? 'translate' : '' }`}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className={`${ isOpen ? 'translate' : '' }`}>
            {content}
          </li>
        </ul>

      ))}
    </section>
  )
}

export default Collapse
