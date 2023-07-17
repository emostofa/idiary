import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/User/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {logUser} = useContext(UserContext);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() !== "" && password.trim() !== ""
      
    ) {
      const user = {
        
        email,
        password,
      };
      logUser(user);
    };
   
    
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{ border: "0em" }}>
              <div className="card-body p-3 text-center">
                <div className="md-5 mb-4 mt-md-4 pb-0">
                  <h1 className="fw-bold mb-2 ">Log in</h1>
                  <form onSubmit={handleSubmit}>
                  <p className="mb-3"></p>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label text-align-left"
                      htmlFor="typeEmailX"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      placeholder="Enter Email"
                      className="form-control form-control-sm"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>

                  <div className="form-outline form-white mb-0">
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      placeholder="Enter Password"
                      className="form-control form-control-sm"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <p className="small mb-4 pb-lg-2">
      
                    <Link to={'/resetpass'} className="text-50" >
                   
                      Forgot password?
                    
                    </Link>
                  </p>

                  <button
                    className="btn btn-outline-primary btn-sm px-5 mb-2"
                    type="submit"
                  >
                    Login
                  </button>
                  
                  <div className="d-flex justify-content-center text-center mt-3 pt-1">
                    <a href="#!">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                  </form>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
