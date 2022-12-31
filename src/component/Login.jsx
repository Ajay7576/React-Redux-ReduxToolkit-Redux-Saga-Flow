import  { useState } from "react";
import React from 'react';

// import { useNavigate } from "react-router-dom";

function Login() {
  const initData = {
    uname: "",
    upass: "",
  };

  const [loginForm, setLoginForm] = useState(initData);
  const [loginFormError, setLoginFormError] = useState(initData);

//   const navigate = useNavigate();

  const changeHandler = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    setLoginFormError();
  };

  const LoginClick = () => {
   
    // if (hasError) {
    //   setLoginFormError(message);
    // } else {
    //   setLoginFormError(initData);
    //   axios
    //     .post("http://localhost:8001/login", loginForm)
    //     .then((d) => {
    //       if (d.data.status == 1) {
    //         localStorage.setItem("currentUser", d.data.data);
    //         navigate("/home");
    //       } else {
    //         alert(d.data.message);
    //         setLoginForm(initData);
    //       }
    //     })
    //     .catch((e) => {
    //       alert(JSON.stringify(e));
    //       setLoginForm(initData);
    //    });
    // }
  };
  return (
    <div>
      <div>
        <div className="row col-lg-4 mx-auto p-4 m-4">
          <div className="card text-center ">
            <div className="card-header bg-info text-white">Login</div>
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
                    value={loginForm.uname}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-4 text-left">Password</label>
                <div className="col-lg-8">
                  <input
                    type="password"
                    className="form-control"
                    name="upass"
                    placeholder="Password"
                    onChange={changeHandler}
                    value={loginForm.upass}
                  />
                  <span className="text-danger">{loginFormError.upass}</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <input
                type="button"
                value="Login"
                className="btn btn-outline-info text-black"
                onClick={LoginClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
