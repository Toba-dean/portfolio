import { useState, useEffect } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome, AiFillEye, AiFillGithub } from "react-icons/ai";

import { NavTop } from "../../component";
import "./project.styles.scss";
import { urlFor, client } from "../../client";

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
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then(data => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])

  console.log(works);

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
              <div className="work_item" key={idx}>
                <div className='work_img'>
                  <img src={urlFor(work.imgUrl)} alt={work.name} />

                  <div className="work_hover">
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <div className="work_flex">
                        <AiFillEye />
                      </div>
                    </a>

                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <div className="work_flex">
                        <AiFillGithub />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="work_content">
                  <h4>{work.title}</h4>
                  <p className="desc">{work.description}</p>

                  <div className="work_tag">
                    <p>{work.tags[0]}</p>
                  </div>
                </div>


              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Projects