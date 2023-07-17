import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="mt-5"> .</div>
      <div className="container my-5 mt-5">
      <h5 >Welcome to the iDiary website, your ultimate destination for organized and efficient note-taking. We understand the importance of capturing information, insights, and inspiration in a way that is accessible and easy to navigate. Our platform is designed with you in mind, catering to students, professionals, and creatives alike, seeking a seamless note-taking experience.

At our core, we believe that notes are more than just words on a page; they are the keys to unlocking knowledge and fostering personal growth. With our user-friendly interface, you can effortlessly create, organize, and manage your notes, empowering you to stay on top of your game and enhance your productivity.

Why choose us? We pride ourselves on offering a robust set of features that set us apart from the rest. From customizable formatting options to real-time collaboration tools, you have the freedom to tailor your notes to your unique style and share them effortlessly with peers, colleagues, or study groups.

Our commitment to your success goes beyond mere note-taking. We curate a rich library of tips, tricks, and study hacks to help you maximize your learning potential. Whether you're preparing for exams, brainstorming ideas, or tracking project milestones, we have the resources to fuel your progress.

As a team of dedicated learners ourselves, we strive to create a community that fosters collaboration, inspiration, and continuous improvement. We welcome you to join us on this journey of knowledge exploration and self-discovery.

Thank you for choosing our Notes website. Together, let's embrace the power of effective note-taking and unlock the doors to a world of limitless possibilities. Happy note-taking!
</h5>
      </div>
     <div className="container d-flex justify-content-center my-4">
      
     <Link className="btn btn-primary mx-4" to="/login" type="button">
                  Sign in
                </Link>
                
                <Link className="btn btn-secondary mx-4" to="/signup" type="button">
                  Sign up
                </Link>
                
     </div>
    </div>
  );
}
