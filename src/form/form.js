import "./form.css";
import IMG from "../../src/welcome1.jpg";
// import { VscDebugContinue } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";

function Form() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    "submit-btn": "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (value.email && value.password) {
      alert("Test");
    }
  }
  return (
    <div>
      <div className="container">
        <form action="#">
          <div className="login-form">
            <div className="title">Sign In</div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  value={value.email}
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value });
                  }}
                  placeholder="Email"
                  required
                />
                <hr />
              </div>
              <div className="input">
                <input
                  type="text"
                  value={value.password}
                  onChange={(e) => {
                    setValue({ ...value, password: e.target.value });
                  }}
                  placeholder="Password"
                  required
                />
                <hr />
              </div>
              <div className="input">
                <input
                  id="submit-btn"
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                />
                {/* <VscDebugContinue/> */}
              </div>
            </div>
            <div className="text">
              <small>OR Connect With Social Media</small>
            </div>
            <div className="contacts">
              <div className="contact">
                <BsFacebook className="icon" />
                <a href="#1">Sign In With Facebook</a>
              </div>
              <div className="contact">
                <BsTwitter className="icon" />
                <a href="#2">Sign In With Twitter</a>
              </div>
            </div>
          </div>
        </form>
        <div className="side">
          <img src={IMG} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default Form;
