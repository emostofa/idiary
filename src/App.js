import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Notes from "./Components/Notes";
import { NoteContextProvider } from "./Contexts/Notes/NotesContext";
import { UserContextProvider } from "./Contexts/User/UserContext";
import Profile from "./Components/Profile";
import ResetPass from "./Components/ResetPass";

function App() {
  return (
    <>
      <UserContextProvider>
        <NoteContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/resetpass" element={<ResetPass/>}/>
          </Routes>
        </NoteContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
