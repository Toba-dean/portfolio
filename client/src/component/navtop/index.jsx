import { AiFillCaretDown } from "react-icons/ai";

import "./navtop.styles.scss";

const NavTop = ({ path, mobilePath }) => {
  return (
    <div className="top_nav">
      <AiFillCaretDown className="icon" />
      <p className="desk_text">{path}</p>
      <p className="mobile_text">{mobilePath}</p>
    </div>
  )
}

export default NavTop