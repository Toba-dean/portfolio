import "./personal.styles.scss"

const Personal = () => {
  return (
    <div className="personal">
      <p className="personal_head">{"//personal-info"} <span>/ bio</span></p>

      <p className="para">
        <span className='hide'>{"/*"}</span> <br />
        <div>
          I'm a web developer from Nigeria. My coding journey started in 2017 when a friend introduced me to front-end programming, and it has enthralled me ever since I wrote my first "Hello, World" in HTML and saw it displayed in the browser. <br /> <br />
          Being self-taught is difficult and frustrating, and the scariest part for me when I first started was coming face to face with a problem that I couldn't solve and couldn't move forward because of. But, over time, I always figured things out, even if it took me days and multiple attempts. I appreciated the challenge, and it kept me motivated throughout my career as a developer.<br /> <br />
          Web programming is an interest of mine. It allows me to push myself and apply a combination of technologies and creativity. I enjoy the ability to see results immediately and the never-ending learning process.
        </div>
        <span className='hide'>{"*/"}</span>
      </p>
    </div>
  )
}

export default Personal
