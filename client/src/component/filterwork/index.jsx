import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { urlFor } from "../../client";

const FilterWork = ({ work }) => {
  return (
    <div className="work_item">
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
  )
}

export default FilterWork