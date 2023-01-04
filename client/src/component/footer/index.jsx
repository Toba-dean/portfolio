import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"

import "./footer.styles.scss";
import Time from "../time";

const Footer = () => {

  const footerData = [
    {
      icon: <AiFillGithub />,
      path: 'https://github.com/Toba-dean'
    },
    {
      icon: <AiOutlineTwitter />,
      path: 'https://twitter.com/code_DE4N'
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
          footerData.map(({ icon, path, last }, idx) => (
            <a
              href={path}
              key={idx}
              target="_blank"
              className={last && last}
            >
              {icon}
            </a>
          ))
        }

      <div className="left">
        <Time />
      </div>
    </footer>
  )
}

export default Footer
