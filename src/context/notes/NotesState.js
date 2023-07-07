import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const notesdata = [
    {
      "_id": "64632530d82c8448d42f9aa8",
      "user": "645f2a8ee45f89eeb2537e3a",
      "title": "sdaaa1s",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      "tags": "personal, personal,personal, personal",
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
      "title": "New ADDEDS",
      "description": "p24@mail.com",
      "tags": "personal",
      "timeStamp": "2023-05-18T05:24:02.450Z",
      "__v": 0
    }
  ]


  const [notes, setNotes] = useState(notesdata)
  // ADD NOTE TO DB 

  const addNote = (value) => {

    var tags = value.tags

    if (tags === '') {
      tags = "General"
    }

    const note = {
      "title": value.title,
      "description": value.description,
      "tags": tags,
    }
    console.log("Note Added");
    setNotes(notes.concat(note))

  }
  // Delete NOTE TO DB 
  const deleteNote = (id) => {

    console.log(`log delete by ${id}`);

    const newNote = notes.filter((notes) => { return notes._id !== id })
    console.log(newNote);
    setNotes(newNote)


  }
  // edit NOTE TO DB 
  const editNote = (id, title, description, tags) => {

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tags = tags
      }
    }

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;