import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className="container me-auto mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span style="font-size:75px">Your </span>')
                  .typeString(
                    '<i class="fa-solid fa-note-sticky" style="color:#eb2e2e; font-size:3em"></i>'
                  )
                  .typeString(
                    '<span style="color: #27ae60; font-size:75px">notes<span style="color: black;">, </br></span></span>'
                  )
                  .typeString(
                    '<i class="fa-solid fa-file-excel" style="color: #ff9503; font-size:3em"></i>'
                  )
                  .typeString(
                    '<span style="color:#27ae60; font-size:75px"> docs </span> '
                  )
                  .typeString('<span style="font-size:75px"> and </br></span>')
                  .typeString(
                    '<i class="fa-solid fa-code" style="color:#eba92a; font-size:3em"></i>'
                  )
                  .typeString(
                    '<span style="color:#27ae60; font-size:75px" > codes</br></span>'
                  )
                  .typeString('<span style="font-size:75px"> All in one</span>')
                  .pauseFor(500)
                  .deleteChars(3)
                  .typeString(
                    '<a style="font-size:75px; color:red" href="/">one</a>'
                  )

                  .typeString('<span style="font-size:75px; " > place!</span>')
                  .pauseFor(5000)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                deleteSpeed: 70,
                cursor: "",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="d-grid gap-2 col-md-12 mt-4 mb-4 justify-content-center">
              <i
              className="fa-solid fa-book"
              style={{ fontSize:"15em", color: "#00000094", }}
            ></i>
            <h1 className="d-flex justify-content-center fw-bold" style={{fontSize:"3.7em"}}>iDiary</h1>
              </div>
              <div className="d-grid gap-2 col-md-6 mx-auto mb-3  ">
                <Link className="btn btn-primary" to="/login" type="button">
                  Sign in
                </Link>
                <h6>Don't have an account? </h6>
                <Link className="btn btn-secondary" to="/signup" type="button">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
