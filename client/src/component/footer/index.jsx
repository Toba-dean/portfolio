import { NavLink } from "react-router-dom";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"

import "./footer.styles.scss";
import Time from "../time";

const Footer = () => {

  const footerData = [
    {
      icon: <AiFillGithub />,
      path: '/'
    },
    {
      icon: <AiOutlineTwitter />,
      path: '/'
    },
    {
      icon: <AiFillLinkedin />,
      path: '/',
      last: 'last'
    }
  ]

  return (
    <footer>
      <p className="logo">
        find me at:
      </p>

    
        {
          footerData.map(({ icon, path, last }, id) => (
            <NavLink
              to={path}
              key={id}
              target="_blank"
              className={last && last}
            >
              {icon}
            </NavLink>
          ))
        }

      <div className="left">
        <Time />
      </div>
    </footer>
  )
}

export default Footer
