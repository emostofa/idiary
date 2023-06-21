import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section
      className="vh-100 "
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px", border:'0' }}>
                <div className="card-body p-5">
                  <h2 className="text-center mt-4 mb-3">
                    Create an account
                  </h2>

                  <form>
                    <div className="form mb-4">
                    <label className="form-label" for="regUsername">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="regUsername"
                        className="form-control form-control-sm"
                        placeholder="Enter your full name"
                      />
                      
                    </div>

                   
                    <div className="form-outline mb-4">
                    <label className="form-label" for="regEmail">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="regEmail"
                        className="form-control form-control-sm"
                        placeholder="Enter your email"
                      
                      />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="regPass">
                        Password
                      </label>
                      <input
                        type="password"
                        id="regPass"
                        className="form-control form-control-sm"
                        placeholder="Enter your password"
                      />
                      
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="regPassword">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="regPassword"
                        className="form-control form-control-sm"
                      />
                      
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" for="form2Example3cg">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-grid gap-2 col-5 mx-auto">
                      <button
                        type="button"
                        className="btn"
                        style={{color:'teal-900'}}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
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
