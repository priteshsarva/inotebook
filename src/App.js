import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import NoteState from './context/notes/NotesState'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Background from './components/Background'



const App = () => {
   

  return (
    <>
      <NoteState>
        <BrowserRouter>
        {/* <Background /> */}
          <Navbar />
          <div className="container text-light">
            <Routes>
              <Route path="/about" element={<Aboutus />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
