import React from "react";

import { CartecLogo } from "assets/img";
import { grey } from "@material-ui/core/colors";
export default class UserRegister extends React.Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="login100-more">
            <img
              src={CartecLogo}
              alt="logo"
              style={{
                position: "relative",
                top: "35%",
                left: "40%",
                height: 40
              }}
            />
          </div>

          <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
            <form className="login100-classNamem validate-form">
              <span className="login100-form-title p-b-59">Login</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Username is required">
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username..."
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="*************"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn">
                <div
                  className="wrap-login100-form-btn"
                  style={{ margin: "auto" }}>
                  <div
                    className="login100-form-bgbtn"
                    style={{ backgroundColor: grey[500] }}></div>
                  <button className="login100-form-btn">Masuk</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
