import { createContext, useState } from "react";
import axios from "axios";

export const NoteContext = createContext();
const host = "http://192.168.0.143:4000";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwODc4YWNjMWEwMmZhNzViYWE3NiIsImlhdCI6MTY4NzQzNDg3MH0.J6yOMNXlXk2ng3G5iAfd8hhg-Hj0qld-Ibo87QApais";

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = async (newNote) => {
    try {
      //axios for talking to the server
      //
      const response = await axios.post(`${host}/api/notes/newnote`, newNote, {
        headers: {
            'Content-Type': 'application/json',
            'auth-token':authToken
          },
      });
      setNotes([...notes, response.data]); //for showing the notes
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (noteId, updatedNotes) => {
    if (!noteId) {
      return console.log("Provide a valid note!");
    }
      if (!updatedNotes) {
        return console.log("Provide a valid update note!")
      }
    try {
         await axios.patch(`${host}/api/notes/updatenote/${noteId}`,updatedNotes, {
            headers:{
                'Content-Type':'application/json',
                'auth-token':authToken
            },
            
        });
        
        setNotes([...notes]);
    } catch (error) {
        console.error(error);  
    }
  };
  const deleteNote = async (noteId) => {
    if(!noteId) return console.log("Please provide a VALID ID");
    if(!notes.find((note)=>note._id === noteId)) return console.log("Invalid Note to delete");
    try {
         await axios.delete(`${host}/api/notes/deletenote/${noteId}`, {
            headers:{
                'Content-Type':'application/json',
                'auth-token':authToken
            },
            
        });
        setNotes([...notes]);
    } catch (error) {
        console.error(error);
    }
  };

  //getting the notes from the server
  const getNotes = async () => {
    try{
        const response = await axios.get(`${host}/api/notes/fetchnotes`,{
            headers:{
                'Content-Type':'application/json',
                'auth-token':authToken
            },
        });
        setNotes([...response.data]);
    }catch(error){
        console.error(error);
    }
  };

  

  return <NoteContext.Provider value={{addNote,updateNote,deleteNote,notes,getNotes}}>{children}</NoteContext.Provider>;
};
