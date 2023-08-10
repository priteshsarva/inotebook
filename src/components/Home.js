import React, { useContext, useState, useRef, useEffect } from 'react'
import CardNotes from './CardNotes'
import EditCard from './EditCard'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import NoteContext from '../context/notes/NotesContext';


const Home = () => {
  const context = useContext(NoteContext)
  const { notes, deleteNote } = context;




  const [dnotes, setdnotes] = useState(notes)
  const [displayStyle, setDisplayStyle] = useState('none')


  useEffect(() => {
    setdnotes(notes)
    if (notes === [] ) {
      setDisplayStyle('')
    }
    console.log(notes);
    console.log(localStorage.getItem('token'));
  }, [notes])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



  const refff = useRef(null)
  const editcard = useRef(null)

  const [data, setdata] = useState({})
  const [editdata, setEditdata] = useState({})

  const deleteModal = () => {

    let deletData = document.querySelector(".swiper-slide-active")

    setdata({ id: deletData.getAttribute("id"), title: deletData.getAttribute("title") })
  }

  const openEditmodal = () => {

    setEditdata({
      id: document.querySelector(".swiper-slide-active").getAttribute("id"),
      title: document.querySelector(".swiper-slide-active").getAttribute("title"),
      description: document.querySelector(".swiper-slide-active").getAttribute("description"),
      tags: document.querySelector(".swiper-slide-active").getAttribute("tags"),
    })
    editcard.current.click()
  }




  return (
    <>
      <div className={`${displayStyle === 'none' ? "" : "d-flex"} align-items-center`} style={{ height: "80vh", display: displayStyle }} >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={{
          //   dynamicBullets: true,
          //   clickable: true,
          // }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {dnotes.map((notes) => {
            return <>
              <SwiperSlide key={notes._id} id={notes._id} title={notes.title} description={notes.description} tags={notes.tags} onClick={(e) => { openEditmodal(e) }} >
                <CardNotes key={notes._id} id={notes._id} title={notes.title} description={notes.description} tags={notes.tags} />
              </SwiperSlide>

            </>
          })}
          <SwiperSlide key="Add" ref={refff} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <CardNotes />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* delete btn */}
      <div className={`${displayStyle === 'none' ? "" : "d-flex"} justify-content-center delete `} style={{ display: displayStyle }}>
        <button type="button" data-bs-toggle="modal" data-bs-target="#delete" className={`btn btn-danger col-4 m-2 btn-value`} onClick={(e) => { deleteModal(e) }} >Delete</button>
      </div>

      {/* Modal delete */}
      <div className="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content card-glass">
            <div className="modal-header card-header card-header-glass" data-bs-theme="dark">
              <h5 className="user-select-auto card-title text-light"> {data.title} </h5>
              <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                <h4 className="user-select-auto card-text text-light">Are you sure you want to delete this note? </h4>
                <br /> <br /><br />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary " data-bs-dismiss="modal" style={{ width: "5rem" }}>No</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { deleteNote(data.id) }} style={{ width: "5rem" }} >Yes</button>
            </div>
          </div>
        </div>
      </div>

      <button style={{ display: 'none' }} type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editcard2" ref={editcard}></button>
      <EditCard editdata={editdata} />

    </>
  )
}

export default Home
