import React, {useContext,useState} from "react";
import { NoteContext } from "../Contexts/Notes/NotesContext";
export default function NoteCard(props) {

    const {title, description, _id} = props.note;
    const { addNote,updateNote,deleteNote,notes, getNotes } = useContext(NoteContext);

    const [idd, setIdd] = useState()
    const [inputTitle, setInputTitle] = useState(""); 
    const [inputDescription, setInputDescription] = useState("");
    const [editNoteId,setEditNoteId] = useState("");
    let kaku = (notes.find((note)=>note._id ===_id)).title;

     const handleFormTitleChange = (e) => {
         setInputTitle(e.target.value);
         
      };
    
      const handleFormDescriptionChange = (e) => {
        setInputDescription(e.target.value); 
      };

      const handleNoteEdit = (noteId) => {
        // setInputTitle(noteId);
        setIdd(noteId);
        
        //setInputTitle(title);
        //setInputTitle(noteId)
        //console.log(inputTitle," ki")
        
       const noteToEdit = notes.find((note) => note._id === noteId);
        if (noteToEdit) {
          setInputTitle(noteToEdit.title);
          setInputDescription(noteToEdit.description);

          console.log(inputTitle, inputDescription)
        }

      };
    
      const clearNoteForm = () => {
       // setInputTitle("");
        //setInputDescription("");
      };
     


  return (
    
    <>
    
      <div
        className="card col-md-3 mb-3 d-inline-flex  m-2"
        style={{ maxWidth: "15em" }}
      >
        <div className="card-body  position-relative overflow-auto">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description.length < 50
              ? description
              : description.slice(0, 50)}
          </p>
          
          <span
            type="button"
            className="stretched-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            
            onClick={handleNoteEdit}

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
                    onClick={clearNoteForm}
                  ></button>
                </div>
                <div className="modal-body">
                <>
                    <input
                      type="text"
                      value={kaku}
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
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={clearNoteForm}
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
