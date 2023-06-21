import React, { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';


const Notes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleUpdateNote = ()=>{

  }

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title: title,
        content: content,
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    }
  };

  const handleNoteDelete = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="container py-4 mt-5">
      <h1 className="text-4xl text-gray-800 font-bold mb-4">My Notes</h1>
      <form onSubmit={handleNoteSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter note title"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Enter note content"
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
      <ul className="mt-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id} className="mb-3">
              <h3 className="text-xl font-semibold">{note.title}</h3>
              <p>{note.content}</p>
              <button
                onClick={() => handleNoteDelete(note.id)}
                className="btn btn-sm btn-danger m-2"
              >
                Delete Note <BiTrash/>
              </button>
              <button
                onClick={() => handleUpdateNote(note.id)}
                className="btn btn-sm btn-warning  m-2 "
              >
                Edit Note <BiEdit/>
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No notes were found.</p>
        )}
      </ul>
    </div>
  );
};

export default Notes;
