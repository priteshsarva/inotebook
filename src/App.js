import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NoteState from './context/notes/NotesState';
const App = () => {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
