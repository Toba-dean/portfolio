import "./formal.styles.scss";

const Formal = () => {
  return (
    <div className="formal">
      <p className="personal_head">{"//formal"} <span>/ bio</span></p>

      <div className="diploma">
        <p>
          <strong>University Of Lagos</strong> <small>(2015 - 2016)</small> <br />
          <small>Lagos, Nigeria.</small>
        </p>

        <p className="honors">JUPEB Diploma</p>
      </div>
      <div className="college">
        <p>
          <strong>University Of Lagos</strong> <small>(2016 - 2021)</small> <br />
          <small>Lagos, Nigeria.</small>
        </p>
        <p className="honors">BSc. Geophysics</p>
      </div>
    </div>
  )
}

export default Formal