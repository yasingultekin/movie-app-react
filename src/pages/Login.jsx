import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
    signIn(email, password, navigate);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form onSubmit={handleSubmit} id="register">
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="link">Forgot Password?</div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Login"
            />
          </div>
        </form>
        <button className="btn btn-primary form-control">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
