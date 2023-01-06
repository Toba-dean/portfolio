import { AiOutlineProfile } from "react-icons/ai";
import { SlGameController } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi"
import { RxDotFilled } from 'react-icons/rx';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./about.styles.scss";
import { NavData } from "./NavData.data";
import { Code, NavTop, SubNav } from "../../component";
import { Personal, Formal, NonFormal, Skills, Interests } from "../../container";

const About = () => {

  useEffect(() => {
    document.title = "dean - about"
  });

  const { pathname } = useLocation();
  let side_nav = []

  if (pathname === '/about') {
    side_nav.push('personal')
  } else {
    side_nav = pathname.split('/').slice(2)
  }

  return (
    <div className="main_about">
      <div className="icons">
        <AiOutlineProfile />
        <GiNotebook />
        <SlGameController />
      </div>

      <div className="drop_down">
        <NavTop path="personal-info" mobilePath="_about.me" />

        <div className="drop_down-link">
          {
            NavData.map(({ id, ...item }) => (
              <SubNav key={id} item={item} />
            ))
          }
        </div>
      </div>

      <div className="content">
        <div className="top">
          <div className="top_content">
            {side_nav}
            <RxDotFilled />
          </div>
        </div>

        <div className="bottom">
          <div className="left_content">
            <Routes>
              <Route path="/" element={<Personal />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/formal" element={<Formal />} />
              <Route path="/non-formal" element={<NonFormal />} />
              <Route path="/hobbies" element={<Interests />} />
            </Routes>
          </div>

          <div className="right_content">
            <Code />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About


/**
 * for the drop down linking to the side icons
 * 
 * create a useState(false) = [actiive, setActive]
 * add class {active && 'active'}
 * create an function that to toggle the active state when the dropdown is triggered
 * which also shows the content of the drop down
 * 
 * 
 * for drop down link linking to the tab
 * 
 * 
 */