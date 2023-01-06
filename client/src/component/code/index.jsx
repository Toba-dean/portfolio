import Profile from "../../assets/img/profile-pic.jpeg";
import "./code.styles.scss";

const Code = () => {
  return (
    <div className="code">
      <p>{"// code snippet showcase:"}</p>

      <div className="code1">
        <div className="image">
          <img src={Profile} alt="profile" />
          <div className="name">
            <p style={{ color: "#5565E8", marginBottom: -5 }}>@dean</p>
            <p><small>created 5 months ago</small></p>
          </div>
        </div>

        <div className="main_code">
          <p>
            <span style={{ color: "#E99287" }}>const</span> randomHexColorCode
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#E99287" }}> ()</span>
            <span style={{ color: "#E99287" }}>{" =>"}</span>
            {" {"}
          </p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>let </span>n
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#E99287" }}>{"("}</span>
            <span style={{ color: "#fff" }}>{"Math."}</span>
            <span style={{ color: "#E99287" }}>{"random"}</span>
            <span style={{ color: "#E99287" }}>()</span>
            <span style={{ color: "#43D9AD" }}> * </span>
            <span style={{ color: "#C98BDF" }}> 0xfffff</span>
            <span style={{ color: "#43D9AD" }}> * </span>
            <span style={{ color: "#C98BDF" }}> 1000000</span>
            <span style={{ color: "#E99287" }}>{")"}</span>
          </p>
          <p style={{ marginLeft: 95 }}>
            <span style={{ color: "#fff" }}>.</span>
            <span style={{ color: "#E99287" }}>{"toString("}</span>
            <span style={{ color: "#C98BDF" }}>16</span>
            <span style={{ color: "#E99287" }}>{")"}</span>
          </p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>return</span>
            <span style={{ color: "#5565E8" }}>{" '#'"}</span>
            <span style={{ color: "#E99287" }}> + </span>
            <span style={{ color: "#fff" }}>{"n."}</span>
            <span style={{ color: "#E99287" }}>{"slice("}</span>
            <span style={{ color: "#C98BDF" }}>0</span>
            <span style={{ color: "#fff" }}>, </span>
            <span style={{ color: "#C98BDF" }}>6</span>
            <span style={{ color: "#E99287" }}>{")"}</span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p>{"};"}</p>
          <p>
            <span style={{ color: "#E99287" }}>randomHexColorCode</span>
            <span style={{ color: "#E99287" }}>()</span>
            <span style={{ color: "#fff" }}>;</span>
            {" // '#5459e3'"}
          </p>
        </div>
      </div>

      <div className="code1">
        <div className="image">
          <img src={Profile} alt="profile" />
          <div className="name">
            <p style={{ color: "#5565E8", marginBottom: -5 }}>@dean</p>
            <p><small>created 3 months ago</small></p>
          </div>
        </div>

        <div className="main_code">
          <p>
            <span style={{ color: "#E99287" }}>const</span> mostFreqNdVal
            <span style={{ color: "#43D9AD" }}> = </span>
            <span> arr</span>
            <span style={{ color: "#E99287" }}>{" =>"}</span>
            {" {"}
          </p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>let </span>idx
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#C98BDF" }}>0</span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>let </span>mf
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#C98BDF" }}>1</span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>let </span>value
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <br />
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>for{" (let "}</span>
            <span style={{ color: "#fff" }}>i</span>
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#C98BDF" }}>0</span>
            <span style={{ color: "#fff" }}>; </span>
            <span style={{ color: "#fff" }}>i</span>
            <span style={{ color: "#43D9AD" }}> {"<"} </span>
            <span style={{ color: "#fff" }}>arr.</span>
            <span style={{ color: "#E99287" }}>length</span>
            <span style={{ color: "#fff" }}>; </span>
            <span style={{ color: "#fff" }}>i</span>
            <span style={{ color: "#43D9AD" }}>++</span>
            <span style={{ color: "#E99287" }}>{") "}</span>{"{"}
          </p>
          <p style={{ marginLeft: 40 }}>
            <span style={{ color: "#E99287" }}>for{" (let "}</span>
            <span style={{ color: "#fff" }}>j</span>
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#C98BDF" }}>0</span>
            <span style={{ color: "#fff" }}>; </span>
            <span style={{ color: "#fff" }}>j</span>
            <span style={{ color: "#43D9AD" }}> {"<"} </span>
            <span style={{ color: "#fff" }}>arr.</span>
            <span style={{ color: "#E99287" }}>length</span>
            <span style={{ color: "#fff" }}>; </span>
            <span style={{ color: "#fff" }}>j</span>
            <span style={{ color: "#43D9AD" }}>++</span>
            <span style={{ color: "#E99287" }}>{") "}</span>{"{"}
          </p>
          <p style={{ marginLeft: 60 }}>
            <span style={{ color: "#E99287" }}>if(</span>
            <span style={{ color: "#fff" }}>arr
              <span style={{ color: "#E99287" }}>[</span>
              <span style={{ color: "#fff" }}>i</span>
              <span style={{ color: "#E99287" }}>]</span>
            </span>
            <span style={{ color: "#43D9AD" }}> === </span>
            <span style={{ color: "#fff" }}>arr
              <span style={{ color: "#E99287" }}>[</span>
              <span style={{ color: "#fff" }}>i</span>
              <span style={{ color: "#E99287" }}>]</span>
            </span>
            <span style={{ color: "#E99287" }}>)</span>{" {"}
          </p>
          <p style={{ marginLeft: 80 }}>
            <span style={{ color: "#fff" }}>idx</span>
            <span style={{ color: "#43D9AD" }}>++</span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p style={{ marginLeft: 80 }}>
            <span style={{ color: "#E99287" }}>if(</span>
            <span style={{ color: "#fff" }}>mf</span>
            <span style={{ color: "#43D9AD" }}> {"<"} </span>
            <span style={{ color: "#fff" }}>idx</span>
            <span style={{ color: "#E99287" }}>)</span>{" {"}
          </p>
          <p style={{ marginLeft: 100 }}>
            <span style={{ color: "#fff" }}>mf</span>
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#fff" }}>idx;</span>
          </p>
          <p style={{ marginLeft: 100 }}>
            <span style={{ color: "#fff" }}>value</span>
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#fff" }}>arr
              <span style={{ color: "#E99287" }}>[</span>
              <span style={{ color: "#fff" }}>i</span>
              <span style={{ color: "#E99287" }}>]</span>
            </span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p style={{ marginLeft: 80 }}>{"}"}</p>
          <p style={{ marginLeft: 60 }}>{"}"}</p>
          <p style={{ marginLeft: 40 }}>{"}"}</p>
          <p style={{ marginLeft: 40 }}>
            <span style={{ color: "#fff" }}>idx</span>
            <span style={{ color: "#43D9AD" }}> = </span>
            <span style={{ color: "#C98BDF" }}>0</span>
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p style={{ marginLeft: 20 }}>{"}"}</p>
          <p style={{ marginLeft: 20 }}>
            <span style={{ color: "#E99287" }}>return </span>
            {"{ "}
            <span style={{ color: "#C98BDF" }}>value <span style={{ color: "#fff" }}>,</span> mf</span>
            {" }"}
            <span style={{ color: "#fff" }}>;</span>
          </p>
          <p>{"};"}</p>
          <div>
            <span style={{ color: "#fff" }}>console.</span>
            <span style={{ color: "#E99287" }}>log(</span>
            <p style={{ marginLeft: 20 }}>
              <span style={{ color: "#E99287" }}>randomHexColorCode</span>
              <span style={{ color: "#E99287" }}>(
                <span>[</span>
                <span style={{ color: "#C98BDF" }}>1</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>2</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>1</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>1</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>3</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>4</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>2</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>1</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>4</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>3</span>
                <span style={{ color: "#fff" }}>, </span>
                <span style={{ color: "#C98BDF" }}>1</span>
                <span>]</span>
                )
              </span>
            </p>
            <span style={{ color: "#E99287" }}>)</span>
            <span style={{ color: "#fff" }}>;</span>
            {" // { value: 1, mf: 5 }"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Code