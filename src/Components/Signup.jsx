import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User/UserContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const { addUser } = useContext(UserContext);
  


 
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRepPasswordChange = (e) => {
    setRepPassword(e.target.value);
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      repPassword.trim() !== ""
    ) {
      const newUser = {
        name,
        email,
        password,
      };
      addUser(newUser);
    }

  };

 
  return (
    <section className="vh-100 ">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                className="card"
                style={{ borderRadius: "15px", border: "0" }}
              >
                <div className="card-body p-5">
                  <h2 className="text-center mt-4 mb-3">Create an account</h2>

                  <form onSubmit={handleRegisterSubmit}>
                    <div className="form mb-4">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="regPass">
                        Password
                      </label>
                      <input
                        type="password"
                        id="regPass"
                        className="form-control form-control-sm"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="regPassword">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="regPassword"
                        value={repPassword}
                        onChange={handleRepPasswordChange}
                        placeholder="Enter Password Again"
                        className="form-control form-control-sm"
                      />
                    </div>

                    <div className="d-grid col-5 mx-auto">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ color: "teal-900" }}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
