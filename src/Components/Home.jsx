import React from "react";
import Typewriter from "typewriter-effect";
import icon from "./homeicon2.png"

export default function Home() {
  return (
    <>
      <div className="container me-auto">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="font-size:75px">Your </span>' )
                    .typeString('<i class="fa-solid fa-note-sticky" style="color:#eb2e2e; font-size:3em"></i>')
                    .typeString('<span style="color: #27ae60; font-size:75px">notes<span style="color: black;">, </br></span></span>')
                    .typeString('<i class="fa-solid fa-file-excel" style="color: #ff9503; font-size:3em"></i>')
                  .typeString('<span style="color:#27ae60; font-size:75px"> docs </span> ')
                  .typeString('<span style="font-size:75px"> and </br></span>')
                  .typeString('<i class="fa-solid fa-code" style="color:#eba92a; font-size:3em"></i>')
                  .typeString('<span style="color:#27ae60; font-size:75px" > codes</br></span>')
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
              <div className="d-grid gap-2 col-md-12 mx-auto justify-content-center" >
                <img src={icon} className="img-fluid" alt="idiary icon large" />
                
              </div>
              <div className="d-grid gap-2 col-md-6 mx-auto  ">
                <button className="btn btn-outline-primary" type="button">
                  Sign in
                </button>
                <h6>Don't have an account? </h6>
                <button className="btn btn-outline-secondary" type="button">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// style={{width:"100%",height:'0',paddingBottom:'100%',position:'relative'}}
// .typeString('<h1 style="font-size:70px">and</h1>')
// .typeString(
//   '<h1 style="font-size:70px; color:#27ae60">codes</h1>'
// )
// .typeString(
//   '<h1 style="font-size:70px; "> All at <a style="color:red;" href="/">one</a> place!</h1>')<br/>Subsequent columns continue along the new line.</div>
