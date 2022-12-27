import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

import { NavTop } from "../../component";
import "./contact.styles.scss";

const Contact = () => {

  const date = new Date()
  const userData = {
    name: "",
    email: "",
    message: ""
  }
  const [data, setData] = useState(userData);
  const [drop, setDrop] = useState(false);

  const handleToggle = () => setDrop(drop => !drop)

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="contact">
      <div className="contact_info">
        <NavTop path="contact" mobilePath="_contact.me" />

        <div className="bottom">
          <div className="desktop">
            <p>
              <IoMdMail />
              <span>
                <a
                  href="mailto:tobaogundimu@gmail.com"
                  style={{ color: "#607b96", textDecoration: "none" }}
                >
                  tobaogundimu@gmail.com
                </a>
              </span>
            </p>
            <p>
              <ImPhone />
              +2349054217175
            </p>
          </div>

          <div className="mobile">
            <div className="parentNav" onClick={handleToggle}>
              {drop ? <AiFillCaretDown /> : <AiFillCaretRight />}
              <span>contact.me</span>
            </div>

            {
              drop && (
                <div className="drop">
                  <p>
                    <IoMdMail />
                    <span>
                      <a
                        href="mailto:tobaogundimu@gmail.com"
                        style={{ color: "#607b96", textDecoration: "none" }}
                      >
                        tobaogundimu@gmail.com
                      </a>
                    </span>
                  </p>
                  <p>
                    <ImPhone />
                    +2349054217175
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="form">
          <div className="input_text">
            <label htmlFor="name">_name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="input_text">
            <label htmlFor="email">_email:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChangeInput}
            />
          </div>

          <div className="textarea">
            <label htmlFor="">_message:</label>
            <textarea
              name="message"
              id="msg"
              placeholder="send a message.."
              value={data.message}
              onChange={handleChangeInput}
            />
          </div>

          <button>submit-message</button>
        </div>
      </div>

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
          <span style={{ fontSize: '18px', fontWeight: 450 }}>10</span> <span style={{ color: "#5565E8", marginLeft: "30px" }}>button</span><span style={{ color: "#607B96" }}>.</span><span style={{ color: "#5565E8" }}>addEventListerner</span><span style={{ color: "#607B96" }}>{`(`}</span><span style={{ color: "#FEA55F" }}>'click'</span><span style={{ color: "#607B96" }}>,</span> <span style={{ color: "#607B96" }}>{`()`}</span> <span style={{ color: "#C98BDF" }}>{"=>"}</span> <span style={{ color: "#607B96" }}>{`{`}</span>
        </p>

        <p>
          <span style={{ fontSize: '18px', fontWeight: 450 }}>11</span> <span style={{ color: "#5565E8", marginLeft: "50px" }}>form</span><span style={{ color: "#607B96" }}>.</span><span style={{ color: "#5565E8" }}>send</span><span style={{ color: "#607B96" }}>{`(`}</span><span style={{ color: "#5565E8" }}>message</span><span style={{ color: "#607B96" }}>{`)`}</span>
        </p>

        <p>
          <span style={{ fontSize: '18px', fontWeight: 450 }}>12</span><span style={{ color: "#607B96", marginLeft: "30px" }}>{`}`}</span><span style={{ color: "#607B96" }}>{`)`}</span><span style={{ color: "#607B96" }}>;</span>
        </p>
      </div>
    </div>
  )
}

export default Contact