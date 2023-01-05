import "./nonformal.styles.scss";

const NonFormal = () => {
  return (
    <div className="non_formal">
      <div className="harvard">
        <h1>EDx</h1>
        <p>
          <strong>Harvard X</strong> <small>2020</small>
        </p>
        <ul>
          <li>CS50 Introduction to Computer Science (lectures).</li>
        </ul>
      </div>

      <div className="youtube">
        <h1>Youtube</h1>

        <ul>
          <li>
            <p>
              <strong>Zero To Mastery</strong> <small></small>
            </p>

            <ul>
              <li>Complete React for Web Developers.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Traversy Media</strong> <small></small>
            </p>

            <ul>
              <li>
                HTML crash course for Beginners.
              </li>
              <li>
                JavaScript crash course for Beginners.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>The Net Ninja</strong> <small></small>
            </p>

            <ul>
              <li>
                Next Js for Beginners.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Dave Gray</strong> <small></small>
            </p>

            <ul>
              <li>
                Node.js Full course for beginners.
              </li>
              <li>
                React Redux full course for beginners.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Coding Addict</strong>
            </p>

            <ul>
              <li>
                Node.js and Express.js full course.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>The Codeholic</strong>
            </p>

            <ul>
              <li>
                PHP full course for beginners.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NonFormal
