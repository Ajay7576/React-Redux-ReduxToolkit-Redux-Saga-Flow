import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const initData = {
    uname: "",
    upass: "",
    confirmPassword: "",
  };

  const [registerForm, setRegisterFrom] = useState(initData);
  const [registerFormError, setRegisterFromError] = useState(initData);

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setRegisterFrom({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const registerClick = () => {
    // alert('register');
    let hasError = false;
    let messages = initData;

    if (registerForm.uname.trim().length === 0) {
      hasError = true;
      messages = { ...messages, uname: "Please enter Username" };
    }

    if (registerForm.upass.trim().length === 0) {
      hasError = true;
      messages = { ...messages, upass: "Please enter Password" };
    }

    if (registerForm.confirmPassword.trim().length === 0) {
      hasError = true;
      messages = {
        ...messages,
        confirmPassword: "Please enter confirm password",
      };
    }

    if (registerForm.upass !== registerForm.confirmPassword) {
      hasError = true;
      messages = { ...messages, confirmPassword: "Password MisMatch!!" };
    }
    if (hasError) {
      setRegisterFromError(messages);
    } else {
      setRegisterFromError(initData);
      axios
        .post("http://localhost:8001/register", registerForm)
        .then((d) => {
          if (d) {
            if (d.data.status === 1) {
              navigate("/login");
            } else {
              alert(d.data.messages);
              setRegisterFromError(initData);
            }
          }
        })
        .catch((e) => {
          alert(JSON.stringify(e));
          setRegisterFrom(initData);
        });
    }
  };

  return (
    <div>
      <div className="row col-lg-4 mx-auto p-2 m-2">
        <div className="card text-center">
          <div className="card-header bg-info text-white">New User</div>
          <div className="card-body">
            <div className="form-group row">
              <label className="col-lg-4 text-left">UserName</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  name="uname"
                  placeholder="UserName"
                  onChange={changeHandler}
                  value={registerForm.uname}
                />
                <span className="text-danger">{registerFormError.uname}</span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-4 text-left">Password</label>
              <div className="col-lg-8">
                <input
                  type="password"
                  className="form-control"
                  name="upass"
                  placeholder="UserPassword"
                  value={registerForm.upass}
                  onChange={changeHandler}
                />
                <span className="text-danger">{registerFormError.upass}</span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-4 text-left">ConfirmPassword</label>
              <div className="col-lg-8">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={changeHandler}
                  value={registerForm.confirmPassword}
                />
                <span className="text-danger">
                  {registerFormError.confirmPassword}
                </span>
              </div>
            </div>
          </div>
          <div className="card-footer text-white">
            <input
              type="button"
              onClick={registerClick}
              value="register"
              className="btn btn-outline-info text white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
