import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const notesdata = [
    {
      "_id": "64632530d82c8448d42f9aa8",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-16T06:39:44.179Z",
      "__v": 0
    },
    {
      "_id": "64632530d82c8448d42f9aab",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-16T06:39:44.550Z",
      "__v": 0
    },
    {
      "_id": "64632530d82c8448d42f9aae",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-16T06:39:44.775Z",
      "__v": 0
    },
    {
      "_id": "64632530d82c8448d42f9ab1",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-16T06:39:44.984Z",
      "__v": 0
    },
    {
      "_id": "64632531d82c8448d42f9ab4",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-16T06:39:45.157Z",
      "__v": 0
    },
    {
      "_id": "6465b672f0a27d5c4f49a8f9",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-18T05:24:02.450Z",
      "__v": 0
    }
  ]


  const [notes, setNotes] = useState(notesdata)
  // ADD NOTE TO DB 
  const addNote = (title,description,tags) => {

    const note = {
      "_id": "6465b672f0a27d5c4f49a8f9",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "New Notes",
      "description": "p24@mail.com Updated Note",
      "tags": "personal",
      "timeStamp": "2023-05-18T05:24:02.450Z",
      "__v": 0
    }
    console.log("Note Added");

    setNotes(notes.concat(note))

  }
  // Delete NOTE TO DB 
  const deleteNote = (id) => {

  }
  // edit NOTE TO DB 
  const editNote = (title,description,tags) => {

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;