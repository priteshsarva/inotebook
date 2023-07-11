import React, { useState, useRef, useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NotesContext'

const EditCard = (props) => {
    const context = useContext(NoteContext)
    const { editNote } = context;




    useEffect(() => {
        setnotes({
            title: props.editdata.title,
            tags: props.editdata.tags,
            description: props.editdata.description,
            id: props.editdata.id,
        })
    }, [props.editdata])


    const [notes, setnotes] = useState(
        {
            title: '',
            tags: '',
            description: '',
            id: '',
        }
    )



    const ref = useRef(null)
    const reff = useRef(null)

    const handleOnChange = (e) => {
        setnotes({ ...notes, [e.target.name]: e.target.value })

    }
    const removeValue = () => {
        document.getElementById("editModalTitle").value = ""
        document.getElementById("editModalDescription").value = ""
        document.getElementById("editModalTags").value = ""
    }

    const saveChanges = () => {
        if (document.getElementById("editModalTitle").value !== "" && document.getElementById("editModalDescription").value !== "") {
            editNote(notes)
            console.log(notes);
            reff.current.click();
            removeValue()
        }
    }

    const closeModal = () => {

        if (document.getElementById("editModalTitle").value === props.editdata.title && document.getElementById("editModalDescription").value === props.editdata.description &&
            document.getElementById("editModalTags").value === props.editdata.tags) {
            reff.current.click();
        } else {
            ref.current.click();
        }
    }

    return (
        <>
            <div className="modal fade " id="editcard2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <form>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content card-glass">
                            <div className="modal-header card-header card-header-glass" data-bs-theme="dark">

                                <h5 className="user-select-auto card-title text-light">
                                    <input type="text" className="form-control-plaintext" id="editModalTitle" name='title' placeholder="Title" required value={notes.title} onChange={handleOnChange} />
                                </h5>

                                <button type="button" className="btn-close light" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                                    <textarea className="form-control-plaintext" id="editModalDescription" value={notes.description} placeholder='Description' rows="12" name='description' required onChange={handleOnChange} ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className='d-flex me-auto' style={{ width: '100%' }}  >
                                    <textarea style={{ width: 'inherit' }} className=" d-flex form-control-plaintext" id="editModalTags" name='tags' placeholder='Tags' value={notes.tags} rows="2" onChange={handleOnChange} ></textarea>
                                </div>
                                <div className='d-flex justify-content-evenly' style={{ width: '100%' }}>
                                    <button type="button" className="btn btn-secondary " onClick={closeModal}>Close</button>
                                    <button style={{ display: 'none' }} type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#editcardclose" ref={ref}></button>
                                    <button style={{ display: 'none' }} type="button" className="btn btn-secondary " data-bs-dismiss="modal" ref={reff}></button>
                                    <button type="sumit" className="btn btn-primary" onClick={saveChanges} >Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* Confrimation close modal  */}

            <div className="modal fade" id="editcardclose" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content card-glass">
                        <div className="modal-header card-header card-header-glass" data-bs-theme="dark">

                            <button type="button" className="btn-close light" data-bs-toggle="modal" data-bs-target="#editcard2" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                                <h4 className="user-select-auto card-text text-light">Changes are unsaved. Are you sure you want to close? </h4>
                                <br /> <br /><br />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#editcard2" style={{ width: "5rem" }}>No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={removeValue} style={{ width: "5rem" }} >Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCard
