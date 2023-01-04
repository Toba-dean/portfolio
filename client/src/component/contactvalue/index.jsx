import React from 'react'

const ContactRight = ({ data }) => {

  const date = new Date()

  return (
    <div className="contact_val">
      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>1</span> <span style={{ color: "#C98BDF", marginLeft: "35px" }}>const</span> <span style={{ color: "#5565E8" }}>button</span><span style={{ color: "#C98BDF" }} > = </span><span style={{ color: "#5565E8" }}>document.querySelector</span><span style={{ color: "#607B96" }}>{`(`}</span><span style={{ color: "#FEA55F" }}>{`#sendBtn`}</span><span style={{ color: "#607B96" }}>{`)`}</span><span style={{ color: "#607B96" }}>;</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>2</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>3</span> <span style={{ color: "#C98BDF", marginLeft: "35px" }}>const</span> <span style={{ color: "#5565E8" }}>userInfo</span><span style={{ color: "#C98BDF" }} > = </span><span style={{ color: "#607B96" }}>{`{`}</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>4</span> <span style={{ color: "#5565E8", marginLeft: "55px" }}>name:</span> <span style={{ color: "#FEA55F", overflowWrap: "break-word" }}>"{data.name}"</span><span style={{ color: "#607B96" }}>,</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>5</span> <span style={{ color: "#5565E8", marginLeft: "55px" }}>email:</span> <span style={{ color: "#FEA55F", overflowWrap: "break-word" }}>"{data.email}"</span><span style={{ color: "#607B96" }}>,</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>6</span> <span style={{ color: "#5565E8", marginLeft: "55px" }}>message:</span> <span style={{ color: "#FEA55F", overflowWrap: "break-word" }}>"{data.message}"</span><span style={{ color: "#607B96" }}>,</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>7</span> <span style={{ color: "#607B96", marginLeft: "55px" }}>data:</span> <span style={{ color: "#FEA55F" }}>"{date.toDateString()}"</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>8</span> <span style={{ color: "#607B96", marginLeft: 32 }}>{`}`}</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>9</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>10</span> <span style={{ color: "#5565E8", marginLeft: "25px" }}>button</span><span style={{ color: "#607B96" }}>.</span><span style={{ color: "#5565E8" }}>addEventListerner</span><span style={{ color: "#607B96" }}>{`(`}</span><span style={{ color: "#FEA55F" }}>'click'</span><span style={{ color: "#607B96" }}>,</span> <span style={{ color: "#607B96" }}>{`()`}</span> <span style={{ color: "#C98BDF" }}>{"=>"}</span> <span style={{ color: "#607B96" }}>{`{`}</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>11</span> <span style={{ color: "#5565E8", marginLeft: "50px" }}>form</span><span style={{ color: "#607B96" }}>.</span><span style={{ color: "#5565E8" }}>send</span><span style={{ color: "#607B96" }}>{`(`}</span><span style={{ color: "#5565E8" }}>message</span><span style={{ color: "#607B96" }}>{`)`}</span>
      </p>

      <p>
        <span style={{ fontSize: '18px', fontWeight: 450 }}>12</span><span style={{ color: "#607B96", marginLeft: "35px" }}>{`}`}</span><span style={{ color: "#607B96" }}>{`)`}</span><span style={{ color: "#607B96" }}>;</span>
      </p>
    </div>
  )
}

export default ContactRight
