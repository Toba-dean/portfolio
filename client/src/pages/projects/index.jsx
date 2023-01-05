import { useState, useEffect } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";

import { FilterWork, NavTop } from "../../component";
import "./project.styles.scss";
import { client } from "../../client";

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

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
      title: "Next JS",
      icon: <TbBrandNextjs />
    }
  ]

  useEffect(() => {
    document.title = "dean - project"
  });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then(data => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])

  const handleWorkFilter = item => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)));
      }
    }, 500)
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
        <h1>{activeFilter} Projects</h1>

        <div className="works">
          {
            filterWork.map((work, idx) => (
              <FilterWork key={idx} work={work} />
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Projects