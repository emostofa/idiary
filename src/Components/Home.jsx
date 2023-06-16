import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="d-block justify-content-center align-items-center">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="font-size:100px">Your <span style="color: #27ae60;">notes</span> ,</span>'
            )
            .typeString('<h1 style="font-size:80px; color:#27ae60">docs</h1>')

            .typeString('<h1 style="font-size:70px">and</h1>')
            .typeString('<h1 style="font-size:70px; color:#27ae60">codes</h1>')
            .typeString(
              '<h1 style="font-size:70px; "> All at <a style="color:red; underline:false" href="/">one</a> place!</h1>'
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(5000)
            .start();
        }}
        options={{
          autoStart: false,
          loop: false,
          deleteSpeed: 0.5,
          cursor: "",
          devMode: true,
        }}
      />
    </div>
  );
}
