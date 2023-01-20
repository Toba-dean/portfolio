import "./skills.styles.scss";

const Skills = () => {
  return (
    <div className="skills">

      <p className="personal_head">{"//skills"} <span>/ bio</span></p>

      <h1>Technologies I Use:</h1>

      <ul>
        <li>- HTML, CSS.</li>
        <li>- Javascript (ES6+).</li>
        <li>- React, Next Js.</li>
        <li>- PHP.</li>
        <li>- Node, Express.</li>
        <li>- Firebase, Mongo DB.</li>
        <li>- MySQL.</li>
      </ul>

      <h1 className="second">Tools I Use:</h1>

      <ul>
        <li>- Git and GitHub.</li>
        <li>- VsCode.</li>
        <li>- npm.</li>
        <li>- Figma.</li>
      </ul>
    </div>
  )
}

export default Skills
