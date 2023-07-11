import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {

  const url = "http://localhost:5000"
  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZjJhOGVlNDVmODllZWIyNTM3ZTNhIn0sImlhdCI6MTY4NDA0NzY0NH0.PcMsaT2ZKwoeFZ3T-BSQIvuCVMMVdsARPCwHQEsYIwk"
  const notesdata = []


  const [notes, setNotes] = useState(notesdata)
  // ADD NOTE TO DB 

  const getAllNotes = async()=>{
    const response = await fetch(`${url}/api/notes/savenote`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },
    });
    const json = await response.json()
    console.log(json);   

  }



  const addNote = async (value) => {
    var tags = value.tags

    if (tags === '') {
      tags = "General"
    }
    const response = await fetch(`${url}/api/notes/savenote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },
      body: JSON.stringify({
        "title": value.title.toString(),
        "description": value.description.toString(),
        "tags": tags,
      }),

    });

    console.log(response.json());   
    console.log("Note Added");
  }
  // Delete NOTE TO DB 
  const deleteNote = async(id) => {

    const response = await fetch(`${url}/api/notes/deletnote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },  
    });

    console.log(response.json());

    console.log(`log delete by ${id}`);

    const newNote = notes.filter((notes) => { return notes._id !== id })
    console.log(newNote);
    setNotes(newNote)


  }
  // edit NOTE TO DB 
  const editNote = async (editNoteData) => {
    const response = await fetch(`${url}/api/notes/updatenote/${editNoteData.id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },
      body: JSON.stringify({
        "title": editNoteData.title.toString(),
        "description": editNoteData.description.toString(),
        "tags": editNoteData.tags,
      }),
    });

    console.log(response.json()); 

    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === editNoteData.id) {
    //     element.title = editNoteData.title
    //     element.description = editNoteData.description
    //     element.tags = editNoteData.tags
    //   }
    // }

  }


  return (
    <NoteContext.Provider value={{ getAllNotes, notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;