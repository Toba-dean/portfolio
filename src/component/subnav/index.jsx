import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./subnav.styles.scss";

const SubNav = ({ item }) => {

  const [subnav, setSubNav] = useState(false)

  const showSubNav = () => {
    setSubNav(subnav => !subnav)
  }

  return (
    <>
      <div className="sub_menu" onClick={item.subNav && showSubNav}>
        <div className="sub_icon">
          {
            item.subNav && subnav
              ? item.iconOpen
              : item.subNav
                ? item.iconClosed
                : null
          }
        </div>

        <div className={`sub_content ${subnav && "active"}`}>
          <span style={{ color: subnav && item.color}}>
            {item.icon}
          </span>

          <span>
            {item.title}
          </span>
        </div>
      </div>

      {
        subnav && item.subNav.map((ele, idx) => (
          <NavLink
            className={`dropdownlink ${({ isActive }) => isActive && 'active'}`}
            to={ele.path}
            key={idx}
          >
            {ele.icon}
            <span>
              {ele.title}
            </span>
          </NavLink>
        ))
      }
    </>
  )
}

export default SubNav
