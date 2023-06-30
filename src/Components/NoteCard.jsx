import React, { useContext, useState } from "react";
import { NoteContext } from "../Contexts/Notes/NotesContext";

export default function NoteCard(props) {
  const { title, description, _id } = props.note;
  const { notes,deleteNote,updateNote } = useContext(NoteContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");


  const handleFormTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleFormDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleNoteEdit = (noteId) => {
    const noteToEdit = notes.find((note) => note._id === noteId);
    if (noteToEdit) {
      setInputTitle(noteToEdit.title);
      setInputDescription(noteToEdit.description);
    }
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    
    const updatedNote = {
      title: inputTitle,
      description: inputDescription,
    };
  
    updateNote(_id, updatedNote);
  };
  


  const handleNoteDelete = (noteId) => {
    deleteNote(noteId);
  }

  const clearNoteForm = () => {
    setInputTitle("");
    setInputDescription("");
  };


  return (
    <>
      
        <div className="card m-2">
          <div className="card-body position-relative overflow-auto">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description.length < 47
                ? description
                : description.slice(0, 50) + "..."}
            </p>
            <span
              type="button"
              className="stretched-link"
              data-bs-toggle="modal"
              data-bs-target={`#cardModal-${_id}`}
              onClick={() => handleNoteEdit(_id)}
            ></span>
            <div
              className="modal fade"
              id={`cardModal-${_id}`}
              tabIndex="-1"
              aria-labelledby={`cardModalLabel-${_id}`}
              aria-hidden="true"
              data-bs-animation="flip-up"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id={`cardModalLabel-${_id}`}
                    >
                      Edit Note
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={clearNoteForm}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <>
                      <input
                        type="text"
                        value={inputTitle}
                        onChange={handleFormTitleChange}
                        className="form-control mb-2"
                      />
                      <textarea
                        value={inputDescription}
                        onChange={handleFormDescriptionChange}
                        className="form-control"
                        rows="3"
                      ></textarea>
                    </>
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEditSubmit}>
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={clearNoteForm}
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button
              href="#"
              className="btn btn-danger btn-sm"
              style={{ width: "-webkit-fill-available" }}
              onClick={()=>handleNoteDelete(_id)}
            >
              Delete Note
            </button>
          </div>
        </div>
        </>
  );
}
