import React, { useContext } from 'react'

import NoteContext from '../context/notes/NotesContext';

const Delete = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context;


    return (
        <>
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content card-glass">
                        <div className="modal-header card-header card-header-glass" data-bs-theme="dark">
                            <h5 className="user-select-auto card-title text-light"> {props.title} </h5>
                            <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>
                                <h4 className="user-select-auto card-text text-light">Are you sure you want to delete this note? </h4>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete
