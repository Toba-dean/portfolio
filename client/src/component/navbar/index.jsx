import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import "./navbar.styles.scss";

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  const navData = [
    {
      name: '_hello.me',
      path: '/'
    },
    {
      name: '_about.me',
      path: '/about'
    },
    {
      name: '_project.me',
      path: '/project'
    },
    {
      name: '_contact-me',
      path: '/contact',
      left: 'left'
    }
  ]

  const handleToggle = () => setToggle(false)

  return (
    <nav>
      <p className="logo">_dean</p>

      {
        navData.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={`${item.left && item.left} ${({ isActive }) => isActive && 'active'}`}
          >
            {item.name}
          </NavLink>
        ))
      }

      <div className="mobile_nav">
        {toggle ? (
          <>
            <HiX onClick={() => setToggle(false)} />
            <div>
              <ul>
                {
                  navData.map((item, idx) => (
                    <li key={idx} onClick={handleToggle}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </>
        ) : <HiMenuAlt4 onClick={() => setToggle(true)} />}
      </div>
    </nav>
  )
}

export default NavBar

