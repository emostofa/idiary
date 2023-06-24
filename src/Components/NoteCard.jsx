import React, {useContext,useState} from "react";
import { NoteContext } from "../Contexts/Notes/NotesContext";
export default function NoteCard(props) {

    // const [title, setTitle] = useState(""); 
    // const [description, setDescription] = useState("");
    // const [editingNoteId, setEditingNoteId] = useState(null);
    const { addNote,updateNote,deleteNote,notes, getNotes } = useContext(NoteContext);
     const [Notes, setNotes] = useState("")

    const handleCardTitleChange = (noteId, value) => {
        const updatedNotes = notes.map((note) => {
          if (note._id === noteId) {
            return {
              ...note,
              title: value,
            };
          }
          return note;
        });
        setNotes(updatedNotes);
        
      };

  return (
    <>
      <div
        className="card-group card col-md-3 mb-3 d-inline-flex  m-2"
        style={{ maxWidth: "15em" }}
      >
        <div className="card-body  position-relative">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">
            {props.note.description.length < 50
              ? props.note.description
              : props.note.description.slice(0, 50)}
          </p>

          <span
            type="button"
            className="stretched-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"

          ></span>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
<div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Note
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                <>
                    <input
                      type="text"
                      value={Notes.title}
                      onChange={(e) => handleCardTitleChange(props.note._id, e.target.value)}
                      className="form-control mb-2"
                    />
                    <textarea
                      value={Notes.description}
                      //onChange={(e) => handleCardDescriptionChange(note._id, e.target.value)}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
    </div>
           
          
        </div>
        <div className="card-body">
          <a
            href="#"
            className="btn btn-danger btn-sm"
            style={{ width: "-webkit-fill-available" }}
          >
            Delete Note
          </a>
        </div>
      </div>
    </>
  );
}
