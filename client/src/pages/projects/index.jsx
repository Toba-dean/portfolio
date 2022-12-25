import { useState } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";

import { NavTop } from "../../component";
import "./project.styles.scss";

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');

  const category = [
    {
      title: "All",
      icon: <AiFillHome />
    },
    {
      title: "JavaScript",
      icon: <TbBrandJavascript />
    },
    {
      title: "React JS",
      icon: <DiReact />
    },
    {
      title: "Next Js",
      icon: <TbBrandNextjs />
    }
  ]

  const handleWorkFilter = item => {
    setActiveFilter(item);
  }

  return (
    <div className="project">
      <div className="left">
        <NavTop path="projects" mobilePath="_projects" />

        <div className="bottom">
          {
            category.map((item, idx) => (
              <div
                key={idx}
                className={`filter_work ${activeFilter === item.title ? 'item-active' : ''}`}
                onClick={() => handleWorkFilter(item.title)}
              >
                {item.icon}
                {item.title}
              </div>
            ))
          }
        </div>
      </div>

      <div className="right">
        <h1>{activeFilter} projects</h1>
      </div>
    </div>
  )
}

export default Projects