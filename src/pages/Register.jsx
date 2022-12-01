import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form onSubmit={handleSubmit} id="register">
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter your firstname"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter your lastname"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
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
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
