import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../Contexts/Notes/NotesContext";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addNote, notes, getNotes } = useContext(NoteContext);

  useEffect(() => {
    // used to change the state when getnotes() is called  getNotes fetches data from db
    getNotes();
  });

  const handleFormTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      const newNote = {
        title,
        description,
      };
      addNote(newNote);
      clearNoteForm();
    }
  };

  const clearNoteForm = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container py-4 mt-5">
      <h1 className="text-4xl text-gray-800 font-bold mb-4">My Notes</h1>
      <form onSubmit={handleNoteSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={title}
            onChange={handleFormTitleChange}
            placeholder="Enter note title"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            value={description}
            onChange={handleFormDescriptionChange}
            placeholder="Enter note description"
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-sm me-2">
            Add Note
          </button>
        </div>
      </form>

       <ul className="d-flex flex-wrap col-md-12 justify-content-evenly m-2 list-unstyled"> 

        {notes.length > 0
          ? notes
              .toReversed()
              .map((note) => <NoteCard key={note._id} note={note}></NoteCard>)
          : "No notes found"}
         
      </ul>
    </div>
  );
};

export default Notes;
