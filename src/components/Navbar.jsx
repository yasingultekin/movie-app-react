import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //   const currentUser = { displayName: "Yasin Gültekin" };
  // const currentUser = false;
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          <h4>React Movie App</h4>
        </Link>
        <div className="d-flex text-white align-items-center">
          {currentUser ? (
            <>
              <h5 className="mb-0 text-capitalize">
                {currentUser.displayName}
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </h5>
            </>
          ) : (
            <>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
