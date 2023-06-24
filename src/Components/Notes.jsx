import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../Contexts/Notes/NotesContext";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const { addNote,updateNote,deleteNote,notes,getNotes } = useContext(NoteContext);
  const [upNotes, setUpNotes] = useState("")

  useEffect(()=>{ // used to change the state when getnotes() is called  getNotes fetches data from db
    getNotes();
    
  },[]);
  

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
      title: title,
      description: description,
    };
    addNote(newNote);
    clearNoteForm();
  }
  
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedNote = {
        ...upNotes,
      title: title,
      description: description,
    };

    updateNote(updatedNote);
    
  };
    
  const handleCardTitleChange = (noteId, value) => {
    const updatedNotes = notes.map((note) => {
      if (note.date === noteId) {
        return {
          ...note,
          title: value,
        };
      }
      return note;
    });
    
  };

  const handleCardDescriptionChange = (noteId, value) => {
    const updatedNotes = notes.map((note) => {
      if (note.date === noteId) {
        return {
          ...note,
          description: value,
        };
      }
      return note;
    });
    setUpNotes(updatedNotes);
  };

  const handleNoteDelete = (noteId) => {
    deleteNote(noteId) 
    
  };

  const handleNoteEdit = (noteId) => {
    const noteToEdit = notes.find((note) => note._id === noteId);
    ///console.log(noteToEdit , noteId);
    if (noteToEdit) {
       setTitle(noteToEdit.title);
       setDescription(noteToEdit.description);
       setEditingNoteId(noteId);
    }
  };

  const clearNoteForm = () => {
    setTitle("");
    setDescription("");
    setEditingNoteId(null);
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
          <button type="submit"  className="btn btn-primary btn-sm me-2">
            Add Note
          </button>
          
        </div>
      </form>

<ul className="d-flex flex-wrap col-md-12 justify-content-evenly mt-4 list-unstyled">
{notes.length > 0 ? (
          notes.toReversed().map((note) => (
            <NoteCard key={note._id} note={note} >

            </NoteCard>
          
          ))):"No notes found"}



</ul>


      {/* <ul className="d-flex flex-wrap justify-content-between col-md-12 mt-4 list-unstyled">
        {notes.length > 0 ? (
          notes.toReversed().map((note) => (
            <div
              key={note._id}
              className="col-md-3 card d-inline-flex  m-2" 
              style={{ maxWidth: "15em" }}
            >
              <div className="card-body">
                {editingNoteId === note._id ? (
                  <>
                    <input
                      type="text"
                      value={upNotes.title}
                      onChange={(e) => handleCardTitleChange(note._id, e.target.value)}
                      className="form-control mb-2"
                    />
                    <textarea
                      value={upNotes.description}
                      onChange={(e) => handleCardDescriptionChange(note._id, e.target.value)}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description.length <50 ? note.description:note.description.slice(0,50)}</p>
                  </>
                )}
              </div>
              <div className="card-footer bg-transparent">
                {editingNoteId === note._id ? (
                  <>
                    <button
                      onClick={handleEditSubmit}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={clearNoteForm}
                      className="btn btn-secondary btn-sm"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleNoteEdit(note._id)}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit Note
                    </button>
                    <button
                      onClick={() => handleNoteDelete(note._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete Note
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No notes found.</p>
        )}
      </ul> */}

    </div>
  );
};

export default Notes;
