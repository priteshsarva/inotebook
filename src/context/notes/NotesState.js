import React, { useEffect, useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {

  const url = "http://localhost:5000"

  const notesdata = []

  const [authToken, setauthToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    setauthToken(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])

  const [notes, setNotes] = useState(notesdata)
  // ADD NOTE TO DB 


  const getAllNotes = async(loginauthToken) => {

    if (authToken !== null) {
      const response = await fetch(`${url}/api/notes/getallnotes`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": authToken
        },
      });
      const json = await response.json()
      console.log(json);
      setNotes(json)
    } else {
      const response = await fetch(`${url}/api/notes/getallnotes`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": loginauthToken
        },
      });
      const json = await response.json()
      console.log(json);
      setNotes(json)
    }

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

    const json = await response.json()
    console.log(json);
    await getAllNotes()
  }


  // Delete NOTE TO DB 
  const deleteNote = async (id) => {

    const response = await fetch(`${url}/api/notes/deletnote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },
    });
    const json = await response.json()
    console.log(json);
    await getAllNotes()

  }
  // edit NOTE TO DB 
  const editNote = async (editNoteData) => {
    console.log(editNoteData.id);
    const response = await fetch(`${url}/api/notes/updatenote/${editNoteData.id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": authToken
      },
      body: JSON.stringify({
        "title": editNoteData.title,
        "description": editNoteData.description,
        "tags": editNoteData.tags,
      }),
    });
    const json = await response.json()
    console.log(json);
    await getAllNotes()
  }

  return (
    <NoteContext.Provider value={{ getAllNotes, notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;