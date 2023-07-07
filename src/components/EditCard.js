import React, { useState, useRef, useContext } from 'react'
import NoteContext from '../context/notes/NotesContext'

const EditCard = (props) => {
    const context = useContext(NoteContext)
    const { addNote } = context;

    const [notes, setnotes] = useState({})

    const ref = useRef(null)
    const close = useRef(null)

    const handleOnChange = (e) => {
        setnotes({ ...notes, [e.target.name]: e.target.value })
    }
    const removeValue = () => {
        document.getElementById("modaltitle").value = ""
        document.getElementById("modaldescription").value = ""
        document.getElementById("modaltags").value = ""
        console.log("remove Value");
    }

    const saveChanges = () => {

        if (document.getElementById("modaltitle").value !== "" && document.getElementById("modaldescription").value !== "") {
            addNote(notes)
            close.current.click();
            removeValue()
            console.log("saveChanges");

        }

    }

    const closeModal = () => {

        if (document.getElementById("modaltitle").value === "" && document.getElementById("modaldescription").value === "" &&
            document.getElementById("modaltags").value === "") {
            close.current.click();
            console.log(document.getElementById("modaltitle").getAttribute('value'));

        } else {
            ref.current.click();
        }
    }
    console.log("EDIT CARD SUCCEs");
    console.log(props);
    console.log("END");

    return (
        <>
            <div className="modal fade" id="editcard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <form>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content card-glass">
                            <div className="modal-header card-header card-header-glass" data-bs-theme="dark">

                                <h5 className="user-select-auto card-title text-light">
                                    <input type="text" className="form-control-plaintext" id="modaltitle" name='title' value={props.title} required onChange={handleOnChange} />
                                </h5>

                                <button type="button" className="btn-close light" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                                    <textarea className="form-control-plaintext" id="modaldescription" placeholder='Description' rows="12" name='description' required onChange={handleOnChange} ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className='d-flex me-auto' style={{ width: '100%' }}  >
                                    <textarea style={{ width: 'inherit' }} className=" d-flex form-control-plaintext" id="modaltags" name='tags' placeholder='Tags' rows="2" onChange={handleOnChange} ></textarea>
                                </div>
                                <div className='d-flex justify-content-evenly' style={{ width: '100%' }}>
                                    <button type="button" className="btn btn-secondary " onClick={closeModal}>Close</button>
                                    <button style={{ display: 'none' }} type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#savechanges" ref={ref}></button>
                                    <button style={{ display: 'none' }} type="button" className="btn btn-secondary " data-bs-dismiss="modal" ref={close}></button>
                                    <button type="sumit" className="btn btn-primary" onClick={saveChanges} >Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* Confrimation close modal  */}

            <div className="modal fade" id="savechanges" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content card-glass">
                        <div className="modal-header card-header card-header-glass" data-bs-theme="dark">

                            <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                                <h4 className="user-select-auto card-text text-light">Changes are unsaved. Are you sure you want to close? </h4>
                                <br /> <br /><br />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ width: "5rem" }}>No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={removeValue} style={{ width: "5rem" }} >Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCard
