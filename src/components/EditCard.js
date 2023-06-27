import React from 'react'

const EditCard = (props) => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content card-glass">
                            <div className="modal-header card-header card-header-glass" data-bs-theme="dark">

                                <h5 className="user-select-auto card-title text-light">{
                                    typeof props.title !== 'undefined' ? props.title : <input type="text"  className="form-control-plaintext" id="title" placeholder="Title"/>
                                }</h5>

                                <button type="button" className="btn-close light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card-body d-flex align-item-center justify-content-center" style={{ position: "relative" }}>

                                    {typeof props.notes !== 'undefined' ?
                                        <p className="user-select-auto card-text text-light">{props.notes} </p> :
                                        <textarea className="form-control-plaintext" id="exampleFormControlTextarea1" rows="12"></textarea>
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>            
        </>
    )
}

export default EditCard
