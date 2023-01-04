import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const ContactMenu = () => {

  const [drop, setDrop] = useState(false);
  const handleToggle = () => setDrop(drop => !drop);

  return (
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

      <div className="location">
        <div className="loc">
          <AiFillCaretDown className="icon" />
          Location
        </div>

        <div className="place">
          <MdOutlineLocationOn />
          Lagos - Nigeria
        </div>
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
  )
}

export default ContactMenu
