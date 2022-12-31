// import React, { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Navbaar() {
  //   const navigate = useNavigate();

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   let usr = localStorage.getItem("currentUser");
  //   if (usr) {
  //     setUser(usr);
  //   }
  // }, []);

  // const LogOut = () => {
  //   localStorage.clear();
  //   // navigate("/login");
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="/">
          Student Assignment
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/studentCrud">
                Student
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
        {/* {user ? (
          <a onClick={LogOut} className="btn btn-primary my-2 my-sm-0 p-2 m-2">
            Logout
          </a>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary my-2 my-sm-0 p-2 m-2"
            type="submit"
          >
            Login
          </Link>
        )} */}
      </nav>
    </div>
  );
}

export default Navbaar;
