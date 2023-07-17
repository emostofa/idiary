import React from 'react'

export default function Profile() {
  return (
    // Profile.js
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mt-5">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="img-fluid rounded-circle mt-5"
          />
        </div>
        <div className="col-md-8 mt-5">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Location: New York, USA</p>
          <p>About me:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis ante eu ex feugiat, sit amet accumsan dui luctus. Etiam
            fermentum elit velit, in ultrices lectus consequat sit amet. Ut
            quis tellus euismod, aliquam nunc vel, facilisis urna. Nullam
            sagittis, risus ut convallis eleifend, ligula dui fringilla
            libero, et dignissim arcu arcu ac justo.
          </p>
        </div>
      </div>
    </div>
  );


  
}
